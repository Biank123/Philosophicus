INSERT INTO temas (nombre, descripcion) VALUES
('Ética', 'El estudio de la moral y la conducta humana. La ética examina lo que es correcto e incorrecto, y cómo las acciones humanas pueden ser evaluadas en función de principios morales. Se divide en varias ramas, incluyendo la ética normativa, la ética aplicada y la metaética. Los filósofos éticos analizan teorías como el utilitarismo, el deontologismo y la ética de la virtud, buscando responder a preguntas sobre el bien, la justicia y la responsabilidad.'),
('Epistemología', 'El estudio del conocimiento y la creencia. La epistemología investiga la naturaleza, los límites y la justificación del conocimiento. Se centra en preguntas fundamentales como "¿Qué es el conocimiento?", "¿Cómo adquirimos conocimiento?" y "¿Qué justifica nuestras creencias?". A través del análisis crítico de la percepción, la memoria y la razón, la epistemología busca entender cómo se forma el conocimiento y qué significa realmente "saber" algo.'),
('Metafísica', 'El estudio de la naturaleza de la realidad. La metafísica aborda cuestiones sobre la existencia, el ser y el universo, explorando conceptos como la identidad, el tiempo, el espacio y la causalidad. Se pregunta si existen entidades abstractas, como números y propiedades, y investiga la relación entre mente y cuerpo, y la naturaleza del libre albedrío. La metafísica se divide en ramas como la ontología, que estudia el ser, y la cosmología, que investiga el universo.'),
('Estética', 'El estudio de la belleza y el arte. La estética examina cómo percibimos y valoramos lo bello, y cómo se relaciona con el arte, la naturaleza y la experiencia estética. Los filósofos estéticos analizan cuestiones sobre el gusto, la crítica del arte y la función del arte en la sociedad. Se preguntan qué hace que una obra de arte sea valiosa y cómo nuestras emociones y respuestas sensoriales influyen en nuestra apreciación estética.'),
('Lógica', 'El estudio de los principios del razonamiento. La lógica investiga las reglas y estructuras del pensamiento válido y la inferencia. Se ocupa de la formulación de argumentos, la validez de las premisas y las conclusiones, y el análisis de falacias. A través de sistemas formales y lenguajes simbólicos, la lógica busca establecer criterios para determinar la corrección de los razonamientos, siendo fundamental en la filosofía, las matemáticas y la informática.'),
('Política', 'El estudio del poder y la organización social. La filosofía política se centra en el análisis de estructuras sociales, sistemas de gobierno, justicia y derechos humanos. Examina teorías políticas como el liberalismo, el marxismo y el republicanismo, y aborda preguntas sobre la naturaleza de la autoridad, la legitimidad del poder y los principios que deben guiar la vida en comunidad. La filosofía política también se ocupa de la ética en las decisiones políticas y la justicia social.'),
('Filosofía de la mente', 'El estudio de la naturaleza de la mente y la conciencia. Esta rama de la filosofía investiga cuestiones sobre la relación entre mente y cuerpo, la naturaleza de los estados mentales y la conciencia. Explora debates sobre el dualismo, el materialismo y el funcionalismo, y se pregunta cómo se relacionan las experiencias subjetivas con los procesos físicos en el cerebro. La filosofía de la mente también aborda temas como el libre albedrío y la identidad personal.'),
('Filosofía del lenguaje', 'El estudio de la naturaleza y el uso del lenguaje. La filosofía del lenguaje analiza cómo el lenguaje representa la realidad, cómo se produce el significado y cómo se relaciona con el pensamiento. Examina cuestiones sobre la referencia, la verdad, el significado y la interpretación, y considera el impacto del contexto en la comunicación. Los filósofos del lenguaje también se interesan en el papel del lenguaje en la construcción de la realidad social y cultural.'),
('Filosofía de la ciencia', 'El estudio de los fundamentos y métodos de la ciencia. La filosofía de la ciencia investiga las bases epistemológicas de las teorías científicas, los métodos de investigación y la demarcación entre ciencia y no-ciencia. Se ocupa de cuestiones sobre la naturaleza de las teorías científicas, la observación, la explicación y la predicción, y analiza el papel de la inducción y la deducción en la ciencia. Además, examina las implicaciones éticas y sociales de los desarrollos científicos.');

INSERT INTO epocas (nombre) VALUES
('Antigüedad'),
('Edad Media'),
('Renacimiento'),
('Modernidad'),
('Contemporaneidad');

UPDATE epocas 
SET descripcion = 'La Antigüedad abarca desde la invención de la escritura hasta la caída del Imperio Romano, destacándose el desarrollo de civilizaciones y el pensamiento filosófico de figuras como Platón y Aristóteles.'
WHERE nombre = 'Antigüedad';

UPDATE epocas 
SET descripcion = 'La Edad Media, que se extiende desde la caída del Imperio Romano hasta el Renacimiento, es notable por su fuerte influencia religiosa y el surgimiento del pensamiento escolástico.'
WHERE nombre = 'Edad Media';

UPDATE epocas 
SET descripcion = 'El Renacimiento, que tuvo lugar entre los siglos XIV y XVII, marcó el redescubrimiento de la literatura, el arte y la filosofía clásicas, y promovió el humanismo.'
WHERE nombre = 'Renacimiento';

UPDATE epocas 
SET descripcion = 'La Modernidad, que se desarrolló entre los siglos XVII y XVIII, se caracteriza por el auge de la razón y la ciencia, y la aparición de nuevas corrientes filosóficas como el empirismo y el racionalismo.'
WHERE nombre = 'Modernidad';

UPDATE epocas 
SET descripcion = 'La Contemporaneidad abarca desde finales del siglo XVIII hasta la actualidad, marcada por grandes cambios políticos, sociales y tecnológicos, así como el surgimiento de nuevas corrientes filosóficas como el existencialismo.'
WHERE nombre = 'Contemporaneidad';

-- Relacionar Problemas con Temas

-- ÉTICA
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (1, 24); -- El dilema del tranvía
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (1, 25); -- El problema del relativismo moral
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (1, 29); -- El problema del altruismo
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (1, 30); -- El problema de la moralidad en la política
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (1, 31); -- El problema de la ética en la medicina
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (1, 32); -- El problema de la justicia distributiva
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (1, 33); -- El problema de los derechos animales
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (1, 34); -- El problema de la ética en los negocios
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (1, 35); -- El problema del relativismo cultural
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (1, 36); -- El problema de la moralidad y la ley
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (1, 37); -- El problema de la moralidad y la existencia de Dios
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (1, 66); -- El problema del arte y la moralidad
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (1, 81); -- El problema de la igualdad y la equidad

-- EPISTEMOLOGÍA
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (2, 38); -- El problema de la justificación del conocimiento
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (2, 39); -- El problema del escepticismo
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (2, 40); -- El problema del conocimiento a priori
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (2, 41); -- El problema del sentido común
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (2, 42); -- El problema del conocimiento tácito
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (2, 43); -- El problema de la justificación externa
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (2, 44); -- El problema de la percepción y la realidad
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (2, 45); -- El problema de la certeza del conocimiento
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (2, 47); -- El problema de la epistemología social
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (2, 48); -- El problema de la verdad
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (2, 49); -- El problema de la demarcación

-- METAFÍSICA
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (3, 13); -- El problema de la identidad personal
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (3, 14); -- El problema del individuo
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (3, 15); -- El problema de los universales
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (3, 16); -- El problema de la existencia del mal
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (3, 17); -- El dilema del libre albedrío
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (3, 18); -- El problema del ser
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (3, 19); -- El problema de la causalidad
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (3, 20); -- El problema del espacio y el tiempo
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (3, 21); -- El problema del ser necesario
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (3, 22); -- El problema de la mente y el cuerpo
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (3, 23); -- El problema de la existencia de Dios
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (3, 57); -- El problema del realismo científico
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (3, 58); -- El problema de la teoría unificada

-- ESTÉTICA
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (4, 61); -- El problema del gusto
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (4, 62); -- El problema de la representación en el arte
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (4, 63); -- El problema de la intención del artista
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (4, 64); -- El problema de la belleza
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (4, 65); -- El problema de la autenticidad en el arte
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (4, 68); -- El problema de la interpretación estética
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (4, 70); -- El problema del arte y la política
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (4, 71); -- El problema del arte y la identidad cultural
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (4, 73); -- El problema del arte y la verdad

-- LÓGICA
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (5, 1); -- El problema de la paradoja de Epiménides
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (5, 2); -- El problema de la lógica modal
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (5, 3); -- El problema de la contradicción
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (5, 4); -- El problema de la lógica de segundo orden
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (5, 5); -- El problema de los predicados vacíos
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (5, 6); -- El problema del sistema lógico cerrado
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (5, 7); -- El problema de los silogismos categóricos
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (5, 8); -- El problema de los cuantificadores
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (5, 9); -- El problema de la paradoja de Curry
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (5, 10); -- El problema del lenguaje lógico
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (5, 11); -- El problema de la consistencia
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (5, 12); -- El problema del principio de bivalencia

-- POLÍTICA
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (6, 76); -- El problema de la justicia distributiva
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (6, 77); -- El problema del contrato social
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (6, 78); -- El problema del poder y la autoridad
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (6, 79); -- El problema del deber ciudadano
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (6, 80); -- El problema de la legitimidad política
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (6, 82); -- El problema de la participación política
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (6, 83); -- El problema de la soberanía nacional
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (6, 84); -- El problema de la libertad y el control
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (6, 85); -- El problema del poder y la corrupción
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (6, 86); -- El problema de la igualdad y los derechos

-- FILOSOFÍA DE LA MENTE
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (7, 14); -- El problema del dualismo
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (7, 15); -- El problema del materialismo
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (7, 16); -- El problema de la consciencia
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (7, 17); -- El problema del libre albedrío
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (7, 18); -- El problema de la identidad personal
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (7, 19); -- El problema de la intencionalidad
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (7, 20); -- El problema de la percepción
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (7, 21); -- El problema de los estados mentales
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (7, 22); -- El problema de la relación mente-cuerpo

-- FILOSOFÍA DEL LENGUAJE
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (8, 61); -- El problema de la referencia
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (8, 62); -- El problema de la verdad
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (8, 63); -- El problema de la comunicación
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (8, 64); -- El problema del significado
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (8, 65); -- El problema del lenguaje privado
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (8, 66); -- El problema del lenguaje y el pensamiento
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (8, 67); -- El problema de las metáforas
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (8, 68); -- El problema del contexto
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (8, 69); -- El problema del uso del lenguaje

-- FILOSOFÍA DE LA CIENCIA
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (9, 70); -- El problema de la demarcación científica
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (9, 71); -- El problema de la observación
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (9, 72); -- El problema de la teoría y la evidencia
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (9, 73); -- El problema de la explicación científica
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (9, 74); -- El problema del progreso científico
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (9, 75); -- El problema de la relación entre ciencia y filosofía
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (9, 76); -- El problema de la verdad en la ciencia
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (9, 77); -- El problema del realismo y el antirrealismo
INSERT INTO temas_problemas (tema_id, problema_id) VALUES (9, 78); -- El problema de la predicción científica


-- RELACIONAR PROBLEMAS FILOSÓFICOS CON ÉPOCAS

-- ANTIGÜEDAD
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (1, 1);  -- El problema de la existencia de Dios
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (1, 2);  -- El problema del mal
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (1, 3);  -- El problema de la verdad
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (1, 4);  -- El problema del conocimiento
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (1, 5);  -- El problema de la justicia
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (1, 6);  -- El problema del ser
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (1, 7);  -- El problema del destino
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (1, 8);  -- El problema de la naturaleza humana
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (1, 9);  -- El problema de la moralidad

-- EDAD MEDIA
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (2, 10); -- El problema de la fe y la razón
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (2, 11); -- El problema de la libertad
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (2, 12); -- El problema de la inmortalidad
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (2, 13); -- El problema del conocimiento
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (2, 14); -- El problema de la providencia
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (2, 15); -- El problema de la verdad
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (2, 16); -- El problema del mal
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (2, 17); -- El problema de la existencia de Dios

-- RENACIMIENTO
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (3, 18); -- El problema de la razón
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (3, 19); -- El problema del individuo
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (3, 20); -- El problema de la naturaleza
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (3, 21); -- El problema del conocimiento
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (3, 22); -- El problema de la moralidad
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (3, 23); -- El problema de la estética

-- MODERNIDAD
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (4, 24); -- El problema del conocimiento
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (4, 25); -- El problema de la razón
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (4, 26); -- El problema del sujeto
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (4, 27); -- El problema del Estado
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (4, 28); -- El problema de la libertad
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (4, 29); -- El problema del progreso

-- CONTEMPORANEIDAD
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (5, 30); -- El problema de la identidad
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (5, 31); -- El problema del sentido de la vida
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (5, 32); -- El problema de la ética
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (5, 33); -- El problema de la justicia social
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (5, 34); -- El problema del lenguaje
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (5, 35); -- El problema de la tecnología
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (5, 36); -- El problema de la globalización
INSERT INTO epocas_problemas (epoca_id, problema_id) VALUES (5, 37); -- El problema de la política

-- RELACIONAR PROBLEMAS FILOSÓFICOS CON AUTORES

-- El problema de la existencia de Dios
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (17, 1);  -- Sócrates
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (41, 1);  -- San Agustín de Hipona
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (45, 1);  -- Tomás de Aquino
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (46, 1);  -- Guillermo de Ockham

-- El problema del mal
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (41, 2);  -- San Agustín de Hipona
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (45, 2);  -- Tomás de Aquino
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (49, 2);  -- Moisés Maimónides

-- El problema de la verdad
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (18, 3);  -- Platón
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (19, 3);  -- Aristóteles

-- El problema del conocimiento
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (53, 4);  -- René Descartes
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (56, 4);  -- John Locke
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (59, 4);  -- David Hume

-- El problema de la justicia
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (67, 5);  -- Georg Wilhelm Friedrich Hegel
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (68, 5);  -- Karl Marx

-- El problema del ser
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (19, 6);  -- Aristóteles
-- Aquí no hay autores relacionados, así que no se inserta nada

-- El problema del destino
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (73, 7);  -- Jean-Paul Sartre
-- Aquí no hay autores relacionados, así que no se inserta nada

-- El problema de la naturaleza humana
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (69, 8);  -- Friedrich Nietzsche
-- Aquí no hay autores relacionados, así que no se inserta nada

-- El problema de la moralidad
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (38, 9);  -- Séneca
INSERT INTO autores_problemas (autor_id, problema_id) VALUES (32, 9);  -- Carnéades

UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 1;  -- "El problema de la paradoja de Epiménides"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 2;  -- "El problema de la lógica modal"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 3;  -- "El problema de la contradicción"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 4;  -- "El problema de la lógica de segundo orden"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 5;  -- "El problema de los predicados vacíos"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 6;  -- "El problema del sistema lógico cerrado"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 7;  -- "El problema de los silogismos categóricos"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 8;  -- "El problema de los cuantificadores"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 9;  -- "El problema de la paradoja de Curry"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 10; -- "El problema del lenguaje lógico"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 11; -- "El problema de la consistencia"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 12; -- "El problema del principio de bivalencia"
UPDATE problemas_filosoficos SET tema_id = 3 WHERE id = 13; -- "El problema de la identidad personal"
UPDATE problemas_filosoficos SET tema_id = 3 WHERE id = 14; -- "El problema del individuo"
UPDATE problemas_filosoficos SET tema_id = 3 WHERE id = 15; -- "El problema de los universales"
UPDATE problemas_filosoficos SET tema_id = 3 WHERE id = 16; -- "El problema de la existencia del mal"
UPDATE problemas_filosoficos SET tema_id = 3 WHERE id = 17; -- "El dilema del libre albedrío"
UPDATE problemas_filosoficos SET tema_id = 3 WHERE id = 18; -- "El problema del ser"
UPDATE problemas_filosoficos SET tema_id = 3 WHERE id = 19; -- "El problema de la causalidad"
UPDATE problemas_filosoficos SET tema_id = 3 WHERE id = 20; -- "El problema del espacio y el tiempo"
UPDATE problemas_filosoficos SET tema_id = 3 WHERE id = 21; -- "El problema del ser necesario"
UPDATE problemas_filosoficos SET tema_id = 7 WHERE id = 22; -- "El problema de la mente y el cuerpo"
UPDATE problemas_filosoficos SET tema_id = 3 WHERE id = 23; -- "El problema de la existencia de Dios"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 24; -- "El dilema del tranvía"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 25; -- "El problema del relativismo moral"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 26; -- "El dilema del soldado"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 27; -- "El problema de la ética de la tecnología"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 28; -- "El dilema del utilitarismo"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 29; -- "El problema del altruismo"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 30; -- "El problema de la moralidad en la política"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 31; -- "El problema de la ética en la medicina"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 32; -- "El problema de la justicia distributiva"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 33; -- "El problema de los derechos animales"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 34; -- "El problema de la ética en los negocios"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 35; -- "El problema del relativismo cultural"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 36; -- "El problema de la moralidad y la ley"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 37; -- "El problema de la moralidad y la existencia de Dios"
UPDATE problemas_filosoficos SET tema_id = 5 WHERE id = 38; -- "El problema de la justificación del conocimiento"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 39; -- "El problema del escepticismo"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 40; -- "El problema del conocimiento a priori"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 41; -- "El problema del sentido común"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 42; -- "El problema del conocimiento tácito"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 43; -- "El problema de la justificación externa"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 44; -- "El problema de la percepción y la realidad"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 45; -- "El problema de la certeza del conocimiento"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 46; -- "El problema del conocimiento tácito"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 47; -- "El problema de la epistemología social"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 48; -- "El problema de la verdad"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 49; -- "El problema de la demarcación"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 50; -- "El problema de las leyes científicas"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 51; -- "El problema del cambio paradigmático"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 52; -- "El problema de la teoría y la observación"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 53; -- "El problema del determinismo científico"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 54; -- "El problema del progreso científico"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 55; -- "El problema de la inducción"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 56; -- "El problema de la teoría de la falsación"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 57; -- "El problema del realismo científico"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 58; -- "El problema de la teoría unificada"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 59; -- "El problema del modelo científico"
UPDATE problemas_filosoficos SET tema_id = 8 WHERE id = 60; -- "El problema del realismo vs. instrumentalismo"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 61; -- "El problema del gusto"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 62; -- "El problema de la representación en el arte"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 63; -- "El problema de la intención del artista"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 64; -- "El problema de la belleza"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 65; -- "El problema de la autenticidad en el arte"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 66; -- "El problema del arte como expresión"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 67; -- "El problema del arte y la moralidad"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 68; -- "El problema de la interpretación del arte"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 69; -- "El problema del arte y la política"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 70; -- "El problema de la originalidad en el arte"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 71; -- "El problema de la relación entre arte y ciencia"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 72; -- "El problema de la función del arte"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 73; -- "El problema de la objetividad en la crítica de arte"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 74; -- "El problema de la teoría del arte"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 75; -- "El problema del concepto de arte"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 76; -- "El problema de la relación entre arte y emoción"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 77; -- "El problema de la influencia de la cultura en el arte"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 78; -- "El problema de la relación entre arte y experiencia"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 79; -- "El problema de la relación entre arte y tecnología"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 80; -- "El problema de la relación entre arte y percepción"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 81; -- "El problema de la relación entre arte y subjetividad"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 82; -- "El problema de la relación entre arte y sociedad"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 83; -- "El problema de la relación entre arte y naturaleza"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 84; -- "El problema de la relación entre arte y vida"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 85; -- "El problema de la relación entre arte y creatividad"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 86; -- "El problema de la relación entre arte y historia"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 87; -- "El problema de la relación entre arte y simbolismo"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 88; -- "El problema de la relación entre arte y lenguaje"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 89; -- "El problema de la relación entre arte y cultura"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 90; -- "El problema de la relación entre arte y sentido"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 91; -- "El problema de la relación entre arte y comunicación"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 92; -- "El problema de la relación entre arte y interpretación"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 93; -- "El problema de la relación entre arte y representación"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 94; -- "El problema de la relación entre arte y estética"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 95; -- "El problema de la relación entre arte y emoción"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 96; -- "El problema de la relación entre arte y crítica"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 97; -- "El problema de la relación entre arte y función"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 98; -- "El problema de la relación entre arte y creatividad"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 99; -- "El problema de la relación entre arte y subjetividad"
UPDATE problemas_filosoficos SET tema_id = 4 WHERE id = 100; -- "El problema de la relación entre arte y lenguaje"

UPDATE temas SET epoca_id = 1 WHERE id = 1;  -- Ética -> Antigüedad
UPDATE temas SET epoca_id = 4 WHERE id = 2;  -- Epistemología -> Modernidad
UPDATE temas SET epoca_id = 2 WHERE id = 3;  -- Metafísica -> Edad Media
UPDATE temas SET epoca_id = 3 WHERE id = 4;  -- Estética -> Renacimiento
UPDATE temas SET epoca_id = 4 WHERE id = 5;  -- Lógica -> Modernidad
UPDATE temas SET epoca_id = 5 WHERE id = 6;  -- Política -> Contemporaneidad
UPDATE temas SET epoca_id = 5 WHERE id = 7;  -- Filosofía de la mente -> Contemporaneidad
UPDATE temas SET epoca_id = 5 WHERE id = 8;  -- Filosofía del lenguaje -> Contemporaneidad
UPDATE temas SET epoca_id = 4 WHERE id = 9;  -- Filosofía de la ciencia -> Modernidad

-- Antigüedad (epoca_id = 1)
UPDATE autores SET epoca_id = 1 WHERE id IN (75, 76, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44);

-- Edad Media (epoca_id = 2)
UPDATE autores SET epoca_id = 2 WHERE id IN (45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 94, 95, 96);

-- Renacimiento (epoca_id = 3)
UPDATE autores SET epoca_id = 3 WHERE id IN (97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114);

-- Modernidad (epoca_id = 4)
UPDATE autores SET epoca_id = 4 WHERE id IN (115, 116, 117, 118, 119);

-- Contemporaneidad (epoca_id = 5)
UPDATE autores SET epoca_id = 5 WHERE id IN (75, 76, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 74, 77, 78, 79, 80, 104, 106, 107, 108, 109, 110, 111, 112, 113, 114);
