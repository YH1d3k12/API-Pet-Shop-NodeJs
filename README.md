# API-Pet-Shop-NodeJs
Exercício

Crie uma tabela nova dentro do banco PetShop.

A classes será o nosso querido - Cachorros.

Faça com que a classe tenha relação com a classe Cliente, onde: Um Cachorro pertence a Um Cliente e Um Cliente pode ter Vários Cachorros.
Feito isso, realize o CRUD do Cachorro. Faça um metodo para listar todos os cachorros de um Cliente.



CREATE TABLE `clients`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(150) NOT NULL,
    `phone` VARCHAR(15) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL
);

CREATE TABLE `pets`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_client` BIGINT NOT NULL,
    `name` VARCHAR(120) NOT NULL,
    `description` TEXT NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    FOREIGN KEY (`id_client`) REFERENCES `clients`(`id`)
);

CREATE TABLE `veterinarians`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(150) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL
);

CREATE TABLE `appointments`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_veterinarian` BIGINT NOT NULL,
    `id_pet` BIGINT NOT NULL,
    `is_finished` TINYINT(1) NOT NULL,  
    `time` TIME NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    FOREIGN KEY (`id_veterinarian`) REFERENCES `veterinarians`(`id`),
    FOREIGN KEY (`id_pet`) REFERENCES `pets`(`id`)
);

CREATE TABLE `medical_histories`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_appointment` BIGINT NOT NULL,
    `id_pet` BIGINT NOT NULL,
    `case` VARCHAR(150) NOT NULL,
    `description` TEXT NOT NULL,
    `solution` TEXT NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    FOREIGN KEY (`id_appointment`) REFERENCES `appointments`(`id`),
    FOREIGN KEY (`id_pet`) REFERENCES `pets`(`id`)
);
