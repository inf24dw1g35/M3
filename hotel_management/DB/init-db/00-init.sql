-- Criação do banco de dados (caso ainda não exista)
CREATE DATABASE IF NOT EXISTS hotel
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;
USE hotel;

-- Criação da tabela "hotel"
CREATE TABLE IF NOT EXISTS hotel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    stars INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(50) NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS regime (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS room_type (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    capacity INT NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS guest (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    id_card VARCHAR(20) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address VARCHAR(255) NOT NULL,
    country VARCHAR(50) NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


-- CriaÃ§Ã£o da tabela "quarto"
CREATE TABLE IF NOT EXISTS room (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hotelId INT NOT NULL,
    roomTypeId INT NOT NULL,
    number INT NOT NULL,
    price DECIMAL(10,2) NOT NULL, 
    CONSTRAINT FK_room_hotel FOREIGN KEY (hotelId) REFERENCES hotel(id),
    CONSTRAINT FK_room_type FOREIGN KEY (roomTypeId) REFERENCES room_type(id),
    CONSTRAINT UC_room UNIQUE (hotelId, number)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    booking_method VARCHAR(20) NOT NULL, 
    guest_count INT NOT NULL, -- num_hospede 
    credit_card VARCHAR(20) NOT NULL, 
    guest_name VARCHAR(150), 
    address VARCHAR(255) NOT NULL, 
    contact_phone VARCHAR(20) NOT NULL, 
    guestId INT,
    CONSTRAINT FK_reservation_guest FOREIGN KEY (guestId) REFERENCES guest(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS reservation_guest (
    id INT AUTO_INCREMENT PRIMARY KEY,
    guestId INT,
    reservationId INT,
    roomId INT,
    check_in DATE NOT NULL, 
    nights INT NOT NULL, 
    regimeId INT,
    CONSTRAINT FK_reservation_guest_guest FOREIGN KEY (guestId) REFERENCES guest(id),
    CONSTRAINT FK_reservation_guest_reservation FOREIGN KEY (reservationId) REFERENCES reservation(id),
    CONSTRAINT FK_reservation_guest_room FOREIGN KEY (roomId) REFERENCES room(id),
    CONSTRAINT FK_reservation_guest_regime FOREIGN KEY (regimeId) REFERENCES regime(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


-- CriaÃ§Ã£o da tabela "restaurante"
CREATE TABLE IF NOT EXISTS restaurant (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hotelId INT,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(16) NOT NULL,
    meal_type VARCHAR(50) NOT NULL, 
    CONSTRAINT FK_restaurant_hotel FOREIGN KEY (hotelId) REFERENCES hotel(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CriaÃ§Ã£o da tabela "servico"
CREATE TABLE IF NOT EXISTS service (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hotelId INT, -- A coluna hotelId precisa existir no banco de dados
    name VARCHAR(255) NOT NULL,
    CONSTRAINT FK_service_hotel FOREIGN KEY (hotelId) REFERENCES hotel(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    guestId INT NOT NULL,
    hotelId INT NOT NULL,  
    roomId INT NOT NULL,
    roomTypeId INT NOT NULL,  
    check_in DATE NOT NULL,
    nights INT NOT NULL,
    regimeId INT NOT NULL,
    booking_method VARCHAR(20) NOT NULL,
    guest_count INT NOT NULL,
    credit_card VARCHAR(20) NOT NULL,
    address VARCHAR(255) NOT NULL,
    contact_phone VARCHAR(20) NOT NULL,
    date DATE NOT NULL,
    guest_name VARCHAR(150) NOT NULL,
    FOREIGN KEY (guestId) REFERENCES guest(id),
    FOREIGN KEY (roomId) REFERENCES room(id),
    FOREIGN KEY (hotelId) REFERENCES hotel(id),  
    FOREIGN KEY (roomTypeId) REFERENCES room_type(id),  
    FOREIGN KEY (regimeId) REFERENCES regime(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


