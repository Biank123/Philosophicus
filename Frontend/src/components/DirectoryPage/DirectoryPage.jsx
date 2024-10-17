import React from 'react';
import './DirectoryPage.css';

const DirectoryPage = () => {
    return (
        <div className="directory-page">
            <h1 id='elh1'>Directorio de Enlaces</h1>

            {/* Sección de contenido filosófico */}
            <section>
                <h2>Páginas con Contenido Filosófico</h2>
                <ul>
                    {/* Aquí podrás añadir los links más adelante */}
                    <li><a href="https://www.filosofia.org/" target="_blank">Página Filosofía en Español</a></li>
                    <li><a href="http://legacy.earlham.edu/~peters/philinks.htm#philosophers" target="_blank">Guía de Filósofos y Filosofías</a></li>
                    <li><a href="https://www.youtube.com/@RamTalks" target="_blank">Ram Talks: canal de youtube sobre Filosofía</a></li>
                    <li><a href="https://www.youtube.com/results?search_query=mentira+la+verdad+canal+encuentro" target="_blank">Canal encuentro: Mentira la Verdad</a></li>
                </ul>
            </section>

            {/* Sección de revistas y repositorios */}
            <section>
                <h2>Revistas y Repositorios</h2>
                <ul>
                    <li><a href="https://repositorio.uchile.cl/handle/2250/100011/discover?filtertype=subject&filter_relational_operator=equals&filter=Filosof%C3%ADa" target="_blank">Repositorio Universidad de Chile</a></li>
                    <li><a href="https://revistas.ucm.es/index.php/RESF/" target="_blank">Revista Universidad Complutense de Madrid</a></li>
                    <li><a href="https://revistafilosofia.uchile.cl/" target="_blank">Revista de Filosofía Universidad de Chile</a></li>
                    <li><a href="https://www.scielo.cl/scielo.php?script=sci_serial&pid=0718-4360&lng=es/" target="_blank">Revista Scielo</a></li>
                    <li><a href="https://resonancias.uchile.cl/" target="_blank">Revista Resonancias Universidad de Chile</a></li>
                    <li><a href="https://dianoia.filosoficas.unam.mx/index.php/dianoia" target="_blank">Revista Dianoia</a></li>
                    <li><a href="https://revistamutatismutandis.com/index.php/mutatismutandis" target="_blank">Revista Internacional de Filosofía Mutatis Mutandis</a></li>
                </ul>
            </section>

            {/* Sección de IAs */}
            <section>
                <h2>Enlaces a IAs: ¡pregúntales sobre Filosofía!</h2>
                <ul>
                    <li><a href="https://openai.com/chatgpt/overview/" target="_blank">ChatGPT</a></li>
                    <li><a href="https://claude.ai/new" target="_blank">ClaudeIA</a></li>
                </ul>
            </section>

            {/* Sección de descargables */}
            <section>
                <h2>Para descargar libros</h2>
                <ul>
                    <li><a href="https://libgen.is/" target="_blank">Library Genesis</a></li>
                    <li><a href="https://www.zlibrary.to/" target="_blank">Z-Library</a></li>
                </ul>
            </section>
        </div>
    );
};

export default DirectoryPage;