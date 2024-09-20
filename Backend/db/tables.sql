CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE essays (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sections (
    id SERIAL PRIMARY KEY,
    content TEXT,
    template_id INTEGER REFERENCES templates(id),
    essay_id INTEGER REFERENCES essays(id) ON DELETE CASCADE,
    "order" INTEGER NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (essay_id, "order")
);


CREATE TABLE points (
    id SERIAL PRIMARY KEY,
    section_id INTEGER REFERENCES sections(id) ON DELETE CASCADE,
    score INTEGER NOT NULL,
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE progress (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    essay_id INTEGER REFERENCES essays(id) ON DELETE CASCADE,
    section_id INTEGER REFERENCES sections(id),
    progress INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id, essay_id)
);


CREATE TABLE templates (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE autosave (
    id SERIAL PRIMARY KEY,
    section_id INTEGER REFERENCES sections(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    section_id INTEGER REFERENCES sections(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id),
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de logros
CREATE TABLE achievements (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    criteria JSONB NOT NULL,  -- Almacena criterios en formato JSON para el logro
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de logros obtenidos por usuarios
CREATE TABLE user_achievements (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    achievement_id INTEGER REFERENCES achievements(id) ON DELETE CASCADE,
    obtained_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    file VARCHAR(255), -- Nombre del archivo subido, si existe
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE files (
    id SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    filename VARCHAR(255) NOT NULL,
    path VARCHAR(255) NOT NULL, -- Ruta donde se almacena el archivo en el servidor
    size INTEGER, -- Tamaño del archivo en bytes
    mimetype VARCHAR(50), -- Tipo MIME del archivo
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la función para actualizar updated_at
CREATE OR REPLACE FUNCTION update_posts_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Crear el trigger que utiliza la función
CREATE TRIGGER trg_update_posts
BEFORE UPDATE ON posts
FOR EACH ROW
EXECUTE FUNCTION update_posts_timestamp();

-- Crear la tabla de problemas filosóficos
CREATE TABLE problemas_filosoficos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    preguntas_relacionadas TEXT NOT NULL,
    descripcion TEXT NOT NULL
);

-- Crear la tabla de autores
CREATE TABLE autores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

-- Tabla intermedia para la relación muchos a muchos
CREATE TABLE autores_problemas (
    autor_id INT,
    problema_id INT,
    FOREIGN KEY (autor_id) REFERENCES autores(id),
    FOREIGN KEY (problema_id) REFERENCES problemas_filosoficos(id),
    PRIMARY KEY (autor_id, problema_id)
);

-- Tabla de borradores
CREATE TABLE drafts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE essays
ADD COLUMN is_published BOOLEAN DEFAULT FALSE;