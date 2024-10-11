INSERT INTO autores (nombre)
VALUES 
('Epicuro'),
('Tales de Mileto'),
('Anaximandro'),
('Anaxímenes'),
('Pitágoras'),
('Heráclito'),
('Parménides'),
('Empédocles'),
('Anaxágoras'),
('Zenón de Elea'),
('Meliso de Samos'),
('Leucipo'),
('Demócrito'),
('Jenófanes'),
('Filolao'),
('Diógenes de Apolonia'),
('Sócrates'),
('Platón'),
('Aristóteles'),
('Antístenes'),
('Diógenes de Sinope'),
('Aristipo de Cirene'),
('Euclides de Mégara'),
('Fedón de Elis'),
('Espeusipo'),
('Jenócrates'),
('Zenón de Citio'),
('Crisipo'),
('Cleantes'),
('Pirrón de Elis'),
('Arcesilao'),
('Carnéades'),
('Diógenes de Babilonia'),
('Filón de Larisa'),
('Posidonio'),
('Lucrecio'),
('Cicerón'),
('Séneca'),
('Epicteto'),
('Marco Aurelio'),
('San Agustín de Hipona'),
('Boecio'),
('Anselmo de Canterbury'),
('Pedro Abelardo'),
('Tomás de Aquino'),
('Guillermo de Ockham'),
('Juan Duns Escoto'),
('Roscelino de Compiègne'),
('Moisés Maimónides'),
('Ramón Llull'),
('Juan de la Cruz'),
('Teresa de Ávila'),
('René Descartes'),
('Francis Bacon'),
('Baruch Spinoza'),
('John Locke'),
('Gottfried Wilhelm Leibniz'),
('George Berkeley'),
('David Hume'),
('Immanuel Kant'),
('Jean-Jacques Rousseau'),
('Voltaire'),
('Denis Diderot'),
('Montesquieu'),
('Jeremy Bentham'),
('Adam Smith'),
('Georg Wilhelm Friedrich Hegel'),
('Karl Marx'),
('Friedrich Nietzsche'),
('Sigmund Freud'),
('Edmund Husserl'),
('Martin Heidegger'),
('Jean-Paul Sartre'),
('Simone de Beauvoir'),
('Ludwig Wittgenstein'),
('Karl Popper'),
('Michel Foucault'),
('Richard Rorty'),
('Jacques Derrida'),
('Slavoj Žižek'),
('Martha Nussbaum'),
('Amartya Sen'),
('Julia Kristeva'),
('Bernard Stiegler'),
('Alain Badiou'),
('Antonio Negri'),
('Franco Berardi'),
('Arthur Schopenhauer'),
('Plotino'),
('Porfirio'),
('Jamblico'),
('Proclo'),
('Simónides de Ceos'),
('Diogenes Laercio'),
('Sexto Empírico'),
('Nicolás de Cusa'),
('Giordano Bruno'),
('Thomas Hobbes'),
('John Stuart Mill'),
('William James'),
('Ayn Rand'),
('Jacques Rancière'),
('Seyla Benhabib'),
('Donna Haraway'),
('Maurice Merleau-Ponty'),
('Alasdair MacIntyre'),
('Julian Baggini'),
('Richard Dawkins'),
('Thomas Nagel'),
('John Rawls'),
('Robert Nozick'),
('David Chalmers'),
('Hilary Putnam'),
('Robert Solomon'),
('Simone Weil'),
('G.E.M. Anscombe'),
('Gustavo Bueno'),
('José Ortega y Gasset'),
('Martin Buber');

UPDATE autores SET descripcion = CASE nombre
    WHEN 'Epicuro' THEN 'Filósofo griego que fundó el epicureísmo, una escuela que enseñaba la búsqueda de la felicidad a través de la moderación.'
    WHEN 'Tales de Mileto' THEN 'Filósofo y matemático griego considerado el primer filósofo de la historia.'
    WHEN 'Anaximandro' THEN 'Filósofo griego conocido por sus contribuciones a la cosmología y la geografía.'
    WHEN 'Anaxímenes' THEN 'Filósofo griego que propuso que el aire es el principio de todas las cosas.'
    WHEN 'Pitágoras' THEN 'Matemático y filósofo griego conocido por el teorema que lleva su nombre y sus enseñanzas sobre la espiritualidad.'
    WHEN 'Heráclito' THEN 'Filósofo griego famoso por su afirmación de que el cambio es la única constante en la vida.'
    WHEN 'Parménides' THEN 'Filósofo griego que afirmó que el cambio es una ilusión y que la realidad es una.'
    WHEN 'Empédocles' THEN 'Filósofo griego conocido por su teoría de que todo está compuesto de cuatro elementos.'
    WHEN 'Anaxágoras' THEN 'Filósofo griego que introdujo el concepto de Nous (mente) como principio organizador del cosmos.'
    WHEN 'Zenón de Elea' THEN 'Filósofo griego conocido por sus paradojas que desafían la noción de movimiento y pluralidad.'
    WHEN 'Meliso de Samos' THEN 'Filósofo griego que defendió la idea de que el ser es uno e infinito.'
    WHEN 'Leucipo' THEN 'Filósofo griego que introdujo la teoría atomista.'
    WHEN 'Demócrito' THEN 'Filósofo griego que propuso que todo está hecho de átomos.'
    WHEN 'Jenófanes' THEN 'Filósofo griego que cuestionó la concepción tradicional de los dioses.'
    WHEN 'Filolao' THEN 'Filósofo griego que fue uno de los primeros en desarrollar la teoría de las esferas.'
    WHEN 'Diógenes de Apolonia' THEN 'Filósofo griego conocido por su enfoque materialista.'
    WHEN 'Sócrates' THEN 'Filósofo griego famoso por su método de diálogo y su búsqueda de la verdad.'
    WHEN 'Platón' THEN 'Filósofo griego que fundó la Academia y escribió diálogos sobre ética, política y metafísica.'
    WHEN 'Aristóteles' THEN 'Filósofo griego que hizo contribuciones a casi todas las áreas del conocimiento.'
    WHEN 'Antístenes' THEN 'Filósofo griego y fundador del cinismo.'
    WHEN 'Diógenes de Sinope' THEN 'Filósofo griego conocido por su estilo de vida cínico y su crítica a las normas sociales.'
    WHEN 'Aristipo de Cirene' THEN 'Filósofo griego que fundó la escuela cirenaica, centrada en la búsqueda del placer.'
    WHEN 'Euclides de Mégara' THEN 'Filósofo griego conocido por sus enseñanzas sobre la lógica.'
    WHEN 'Fedón de Elis' THEN 'Filósofo griego conocido por sus escritos sobre la inmortalidad del alma.'
    WHEN 'Espeusipo' THEN 'Filósofo griego y sucesor de Platón en la Academia.'
    WHEN 'Jenócrates' THEN 'Filósofo griego que fue sucesor de Platón y se centró en la ética.'
    WHEN 'Zenón de Citio' THEN 'Filósofo griego que fundó el estoicismo.'
    WHEN 'Crisipo' THEN 'Filósofo griego que fue uno de los principales desarrolladores del estoicismo.'
    WHEN 'Cleantes' THEN 'Filósofo griego y segundo líder de la escuela estoica.'
    WHEN 'Pirrón de Elis' THEN 'Filósofo griego que es considerado el fundador del escepticismo.'
    WHEN 'Arcesilao' THEN 'Filósofo griego que fundó la Academia de Platón en un periodo cínico.'
    WHEN 'Carnéades' THEN 'Filósofo griego conocido por sus críticas al dogmatismo.'
    WHEN 'Diógenes de Babilonia' THEN 'Filósofo griego que fue un destacado estoico.'
    WHEN 'Filón de Larisa' THEN 'Filósofo griego que fue un destacado académico y crítico.'
    WHEN 'Posidonio' THEN 'Filósofo griego que integró la filosofía estoica con la ciencia.'
    WHEN 'Lucrecio' THEN 'Filósofo y poeta romano que defendió la filosofía epicúrea.'
    WHEN 'Cicerón' THEN 'Filósofo y orador romano conocido por su obra sobre la ética y la política.'
    WHEN 'Séneca' THEN 'Filósofo estoico y dramaturgo romano.'
    WHEN 'Epicteto' THEN 'Filósofo estoico que enfatizó la importancia del autocontrol y la virtud.'
    WHEN 'Marco Aurelio' THEN 'Emperador romano y filósofo estoico, conocido por sus Meditaciones.'
    WHEN 'San Agustín de Hipona' THEN 'Teólogo y filósofo cristiano que influyó en la filosofía occidental.'
    WHEN 'Boecio' THEN 'Filósofo romano conocido por sus obras sobre la lógica y la filosofía.'
    WHEN 'Anselmo de Canterbury' THEN 'Filósofo y teólogo medieval conocido por su argumento ontológico.'
    WHEN 'Pedro Abelardo' THEN 'Filósofo medieval conocido por su enfoque en la lógica y la ética.'
    WHEN 'Tomás de Aquino' THEN 'Filósofo y teólogo medieval que integró la filosofía aristotélica con la teología cristiana.'
    WHEN 'Guillermo de Ockham' THEN 'Filósofo y teólogo que propuso el principio de economía en el razonamiento.'
    WHEN 'Juan Duns Escoto' THEN 'Filósofo medieval conocido por su enfoque en la filosofía nominalista.'
    WHEN 'Roscelino de Compiègne' THEN 'Filósofo medieval que defendió el nominalismo.'
    WHEN 'Moisés Maimónides' THEN 'Filósofo judío y teólogo que influyó en la filosofía medieval.'
    WHEN 'Ramón Llull' THEN 'Filósofo y teólogo conocido por sus contribuciones al pensamiento cristiano.'
    WHEN 'Juan de la Cruz' THEN 'Místico y poeta español, considerado un gran pensador de la espiritualidad.'
    WHEN 'Teresa de Ávila' THEN 'Mística y escritora española que influyó en la espiritualidad cristiana.'
    WHEN 'René Descartes' THEN 'Filósofo francés conocido como el padre de la filosofía moderna.'
    WHEN 'Francis Bacon' THEN 'Filósofo y estadista inglés conocido por sus teorías del empirismo.'
    WHEN 'Baruch Spinoza' THEN 'Filósofo holandés que defendió una ética racionalista.'
    WHEN 'John Locke' THEN 'Filósofo inglés conocido por sus ideas sobre el empirismo y la teoría política.'
    WHEN 'Gottfried Wilhelm Leibniz' THEN 'Filósofo y matemático alemán conocido por su trabajo sobre el monadismo.'
    WHEN 'George Berkeley' THEN 'Filósofo irlandés conocido por su teoría del inmaterialismo.'
    WHEN 'David Hume' THEN 'Filósofo escocés conocido por su empirismo y escepticismo.'
    WHEN 'Immanuel Kant' THEN 'Filósofo alemán conocido por su crítica de la razón pura y la ética deontológica.'
    WHEN 'Jean-Jacques Rousseau' THEN 'Filósofo suizo conocido por sus ideas sobre la educación y la política.'
    WHEN 'Voltaire' THEN 'Filósofo y escritor francés conocido por su defensa de la libertad de expresión.'
    WHEN 'Denis Diderot' THEN 'Filósofo y escritor francés, cofundador de la Enciclopedia.'
    WHEN 'Montesquieu' THEN 'Filósofo francés conocido por sus ideas sobre la separación de poderes.'
    WHEN 'Jeremy Bentham' THEN 'Filósofo y jurista inglés, conocido por ser el fundador del utilitarismo.'
    WHEN 'Adam Smith' THEN 'Filósofo y economista escocés, conocido como el padre de la economía moderna.'
    WHEN 'Georg Wilhelm Friedrich Hegel' THEN 'Filósofo alemán que desarrolló la dialéctica hegeliana.'
    WHEN 'Karl Marx' THEN 'Filósofo y economista alemán conocido por sus teorías sobre el comunismo.'
    WHEN 'Friedrich Nietzsche' THEN 'Filósofo alemán conocido por su crítica a la moralidad tradicional.'
    WHEN 'Sigmund Freud' THEN 'Psicoanalista y filósofo austriaco, conocido por sus teorías sobre la mente humana.'
    WHEN 'Edmund Husserl' THEN 'Filósofo alemán y fundador de la fenomenología.'
    WHEN 'Martin Heidegger' THEN 'Filósofo alemán conocido por su obra sobre la existencia y el ser.'
    WHEN 'Jean-Paul Sartre' THEN 'Filósofo francés conocido por su enfoque en el existencialismo.'
    WHEN 'Simone de Beauvoir' THEN 'Filósofa y feminista francesa conocida por su obra "El segundo sexo".'
    WHEN 'Hannah Arendt' THEN 'Filósofa alemana conocida por sus obras sobre la política y la moralidad.'
    WHEN 'Michel Foucault' THEN 'Filósofo francés conocido por su análisis de las relaciones de poder.'
    WHEN 'Jacques Derrida' THEN 'Filósofo francés conocido por su enfoque deconstructivo en la filosofía.'
    WHEN 'Jürgen Habermas' THEN 'Filósofo alemán conocido por sus teorías sobre la comunicación y la esfera pública.'
    WHEN 'Richard Rorty' THEN 'Filósofo estadounidense conocido por su pragmatismo.'
    WHEN 'Slavoj Žižek' THEN 'Filósofo esloveno conocido por sus análisis sobre la cultura contemporánea.'
    ELSE ''
END;

UPDATE autores SET descripcion = 'Filósofo austríaco y uno de los más influyentes pensadores del siglo XX, conocido por su obra "Tractatus Logico-Philosophicus" y su enfoque en el lenguaje.' WHERE id = 75;  -- Ludwig Wittgenstein

UPDATE autores SET descripcion = 'Filósofo y científico social, conocido por su crítica al historicismo y su defensa del falsacionismo como criterio para la ciencia.' WHERE id = 76;  -- Karl Popper

UPDATE autores SET descripcion = 'Filósofa y teórica feminista contemporánea, reconocida por su trabajo en ética, teoría política y literatura.' WHERE id = 81;  -- Martha Nussbaum

UPDATE autores SET descripcion = 'Economista y filósofo indio, conocido por su enfoque en la economía del desarrollo y la justicia social.' WHERE id = 82;  -- Amartya Sen

UPDATE autores SET descripcion = 'Filósofa y psicoanalista francesa, famosa por sus análisis sobre la identidad, el lenguaje y el feminismo.' WHERE id = 83;  -- Julia Kristeva

UPDATE autores SET descripcion = 'Filósofo y crítico cultural francés, conocido por su trabajo sobre la tecnocultura y la crítica de la modernidad.' WHERE id = 84;  -- Bernard Stiegler

UPDATE autores SET descripcion = 'Filósofo francés contemporáneo, conocido por sus teorías sobre el evento y la verdad en el contexto de la política y el arte.' WHERE id = 85;  -- Alain Badiou

UPDATE autores SET descripcion = 'Filósofo y activista italiano, conocido por sus teorías sobre la biopolítica y el trabajo en la era contemporánea.' WHERE id = 86;  -- Antonio Negri

UPDATE autores SET descripcion = 'Teórico y filósofo italiano, crítico de la sociedad contemporánea y defensor de nuevas formas de comunicación y acción política.' WHERE id = 87;  -- Franco Berardi

UPDATE autores SET descripcion = 'Filósofo alemán del siglo XIX, conocido por su pesimismo filosófico y su crítica a la metafísica y la moralidad.' WHERE id = 88;  -- Arthur Schopenhauer

UPDATE autores SET descripcion = 'Filósofo neoplatónico, conocido por su obra sobre la naturaleza del Uno y la emanación de la realidad.' WHERE id = 89;  -- Plotino

UPDATE autores SET descripcion = 'Filósofo neoplatónico, conocido por sus contribuciones a la metafísica y la interpretación del pensamiento platónico.' WHERE id = 90;  -- Porfirio

UPDATE autores SET descripcion = 'Filósofo neoplatónico, conocido por su obra sobre la mística y la naturaleza del conocimiento.' WHERE id = 91;  -- Jamblico

UPDATE autores SET descripcion = 'Filósofo neoplatónico, conocido por sus aportes a la teología y la filosofía mística.' WHERE id = 92;  -- Proclo

UPDATE autores SET descripcion = 'Poeta y filósofo griego, conocido por sus obras líricas y su influencia en la tradición filosófica.' WHERE id = 93;  -- Simónides de Ceos

UPDATE autores SET descripcion = 'Filósofo y biógrafo griego, conocido por su obra "Vidas y opiniones de los filósofos ilustres", que documenta las vidas de muchos filósofos.' WHERE id = 94;  -- Diogenes Laercio

UPDATE autores SET descripcion = 'Filósofo griego escéptico, conocido por su crítica a las dogmas filosóficos y su defensa del escepticismo.' WHERE id = 95;  -- Sexto Empírico

UPDATE autores SET descripcion = 'Filósofo y teólogo alemán del Renacimiento, conocido por su obra sobre la relación entre razón y fe.' WHERE id = 96;  -- Nicolás de Cusa

UPDATE autores SET descripcion = 'Filósofo italiano del Renacimiento, conocido por sus ideas sobre la infinitud y la naturaleza de la realidad.' WHERE id = 97;  -- Giordano Bruno

UPDATE autores SET descripcion = 'Filósofo inglés, conocido por su obra "Leviatán" y sus ideas sobre el contrato social y la naturaleza humana.' WHERE id = 98;  -- Thomas Hobbes

UPDATE autores SET descripcion = 'Filósofo y economista inglés, defensor del liberalismo y el utilitarismo, conocido por su obra "El utilitarismo".' WHERE id = 99;  -- John Stuart Mill

UPDATE autores SET descripcion = 'Filósofo y psicólogo estadounidense, conocido por sus ideas sobre el pragmatismo y la filosofía del lenguaje.' WHERE id = 100;  -- William James

UPDATE autores SET descripcion = 'Filósofa y novelista rusa, defensora del individualismo y el capitalismo, conocida por su obra "La rebelión de Atlas".' WHERE id = 101;  -- Ayn Rand

UPDATE autores SET descripcion = 'Filósofo y crítico francés, conocido por sus ideas sobre la democracia, la educación y la política contemporánea.' WHERE id = 102;  -- Jacques Rancière

UPDATE autores SET descripcion = 'Filósofa y teórica política turca, conocida por su trabajo sobre justicia social y democracia.' WHERE id = 103;  -- Seyla Benhabib

UPDATE autores SET descripcion = 'Filósofa y bióloga estadounidense, conocida por sus aportes al feminismo y a la teoría de la ciencia.' WHERE id = 104;  -- Donna Haraway

UPDATE autores SET descripcion = 'Filósofo francés, conocido por su trabajo en fenomenología y su exploración de la percepción y el cuerpo.' WHERE id = 105;  -- Maurice Merleau-Ponty

UPDATE autores SET descripcion = 'Filósofo escocés, conocido por su crítica a la tradición ética y su énfasis en la ética de la virtud.' WHERE id = 106;  -- Alasdair MacIntyre

UPDATE autores SET descripcion = 'Filósofo y escritor británico, conocido por su trabajo sobre la filosofía contemporánea y la ética.' WHERE id = 107;  -- Julian Baggini

UPDATE autores SET descripcion = 'Biólogo evolutivo y divulgador científico británico, crítico del creacionismo y defensor del ateísmo.' WHERE id = 108;  -- Richard Dawkins

UPDATE autores SET descripcion = 'Filósofo y teórico estadounidense, conocido por su trabajo sobre la mente, la conciencia y la ética.' WHERE id = 109;  -- Thomas Nagel

UPDATE autores SET descripcion = 'Filósofo estadounidense, conocido por su teoría de la justicia y su obra "Una teoría de la justicia".' WHERE id = 110;  -- John Rawls

UPDATE autores SET descripcion = 'Filósofo y economista estadounidense, conocido por su defensa del liberalismo y su crítica al socialismo.' WHERE id = 111;  -- Robert Nozick

UPDATE autores SET descripcion = 'Filósofo australiano, conocido por su trabajo sobre la conciencia y la filosofía de la mente.' WHERE id = 112;  -- David Chalmers

UPDATE autores SET descripcion = 'Filósofo y matemático estadounidense, conocido por su trabajo en filosofía de la mente y epistemología.' WHERE id = 113;  -- Hilary Putnam

UPDATE autores SET descripcion = 'Filósofo estadounidense, conocido por su trabajo en la filosofía del amor y la ética.' WHERE id = 114;  -- Robert Solomon

UPDATE autores SET descripcion = 'Filósofa y activista francesa, conocida por su trabajo en ética, política y feminismo.' WHERE id = 115;  -- Simone Weil

UPDATE autores SET descripcion = 'Filósofa y matemática británica, conocida por su enfoque analítico en la filosofía y la ética.' WHERE id = 116;  -- G.E.M. Anscombe

UPDATE autores SET descripcion = 'Filósofo español, conocido por su crítica a la modernidad y su enfoque en el conocimiento.' WHERE id = 117;  -- Gustavo Bueno

UPDATE autores SET descripcion = 'Filósofo y ensayista español, conocido por su trabajo sobre la razón, la historia y la identidad.' WHERE id = 118;  -- José Ortega y Gasset

UPDATE autores SET descripcion = 'Filósofo judío, conocido por su obra sobre la relación entre el hombre y Dios y su influencia en el existencialismo.' WHERE id = 119;  -- Martin Buber