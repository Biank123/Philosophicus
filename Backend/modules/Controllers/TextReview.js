require('dotenv').config();

async function revisarTexto(req, res) {
  const texto = req.body.texto;  // Recibe el texto del usuario

  try {
    const response = await fetch('https://api.languagetool.org/v2/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        text: texto,  // El texto a revisar
        language: 'es',  // Cambia a 'en' para inglés si es necesario
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Procesar las sugerencias de la respuesta
    const correcciones = data.matches.map(match => ({
      mensaje: match.message,
      sugerencias: match.replacements.map(replacement => replacement.value),
      contexto: match.context.text
    }));

    // Enviar las correcciones al usuario
    res.json({ correcciones });
  } catch (error) {
    console.error("Error revisando el texto:", error);
    res.status(500).json({ error: "Error revisando el texto." });
  }
}

module.exports = revisarTexto;