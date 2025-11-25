-- ================================================
-- Result Management System Database
-- BS-IT 5th Semester - Spring 2025
-- ================================================

-- Database Create Karein
CREATE DATABASE IF NOT EXISTS result_management;

-- Database Use Karein
USE result_management;

-- Agar purana table hai to delete kar dein
DROP TABLE IF EXISTS students;

-- Students Table Banana
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    roll_no VARCHAR(10) NOT NULL UNIQUE,
    pu_roll_no VARCHAR(10) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    cgpa DECIMAL(3,2) NOT NULL,
    dbms DECIMAL(3,2) NOT NULL,
    web_engineering DECIMAL(3,2) NOT NULL,
    software_engineering DECIMAL(3,2) NOT NULL,
    computer_networks DECIMAL(3,2) NOT NULL,
    operating_systems DECIMAL(3,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Sample Data Insert Karein
INSERT INTO students (roll_no, pu_roll_no, name, cgpa, dbms, web_engineering, software_engineering, computer_networks, operating_systems) VALUES
('1291', '113477', 'BAREERA TAHIR', 3.66, 3.8, 3.7, 3.6, 3.5, 3.7),
('1292', '113478', 'RABIA NOOR', 3.62, 3.7, 3.6, 3.5, 3.6, 3.7),
('1293', '113479', 'SANIA ALI', 3.55, 3.6, 3.5, 3.5, 3.6, 3.6),
('1294', '113480', 'KHADIJA ZEB', 3.57, 3.5, 3.6, 3.6, 3.5, 3.6),
('1295', '113481', 'ZOHRA BIBI', 3.50, 3.5, 3.5, 3.5, 3.5, 3.5),
('1296', '113482', 'ROMAN MUSHTAQ', 3.32, 3.3, 3.3, 3.4, 3.3, 3.3),
('1297', '113483', 'AREEBA ILYAS', 3.59, 3.6, 3.6, 3.6, 3.5, 3.6),
('1298', '113460', 'SUMAIQA', 3.69, 3.7, 3.7, 3.7, 3.7, 3.6),
('1299', '113461', 'NADIA YAQOOB', 3.34, 3.4, 3.3, 3.3, 3.4, 3.3),
('1300', '113462', 'AREEBA TEHREEM', 3.37, 3.4, 3.3, 3.4, 3.4, 3.3),
('1301', '113452', 'KHADIJA', 3.70, 3.7, 3.7, 3.7, 3.7, 3.7),
('1302', '113453', 'SALEHA MALIK', 3.35, 3.4, 3.3, 3.3, 3.4, 3.4),
('1303', '113454', 'LAIBA ASLAM', 3.03, 3.0, 3.0, 3.1, 3.0, 3.0),
('1304', '113455', 'LAIBA TABASSUM', 3.73, 3.7, 3.8, 3.7, 3.7, 3.8),
('1305', '113456', 'AYESHA JAMIL', 3.41, 3.4, 3.4, 3.4, 3.5, 3.4),
('1306', '113468', 'RIMLA MAQSOOD', 3.73, 3.7, 3.8, 3.7, 3.7, 3.8),
('1307', '113469', 'AMNA KHAWAJ', 3.35, 3.3, 3.4, 3.4, 3.3, 3.4),
('1308', '113470', 'MEHREEN IFRAHEEM', 3.24, 3.2, 3.3, 3.2, 3.2, 3.3),
('1310', '113459', 'MARYAM FARHEEN', 3.42, 3.4, 3.4, 3.5, 3.4, 3.4),
('1311', '113458', 'IQRA BIBI', 3.38, 3.4, 3.4, 3.3, 3.4, 3.4),
('1312', '113472', 'EMAN UL HAQ', 3.24, 3.2, 3.3, 3.2, 3.2, 3.3),
('1315', '113465', 'NIMRAH AZHAR', 3.44, 3.4, 3.5, 3.4, 3.5, 3.4),
('1316', '113466', 'ALEESHA IDREES', 3.19, 3.2, 3.2, 3.2, 3.1, 3.2),
('1318', '113447', 'IRAJ NAVEED', 3.11, 3.1, 3.1, 3.1, 3.1, 3.2),
('1319', '113485', 'TANZEL ZAHRA', 3.47, 3.5, 3.5, 3.4, 3.5, 3.4),
('1320', '113449', 'ARFA MAHNOOR', 3.49, 3.5, 3.5, 3.5, 3.5, 3.4),
('1321', '113450', 'MARYAM ZULFIQAR', 3.34, 3.3, 3.4, 3.3, 3.3, 3.4),
('1323', '113473', 'ASMARA ARIF', 3.39, 3.4, 3.4, 3.4, 3.4, 3.3),
('1324', '113474', 'MOMINA BIBI', 3.50, 3.5, 3.5, 3.5, 3.5, 3.5),
('1325', '113475', 'AYESHA RUBAB', 3.08, 3.1, 3.0, 3.1, 3.1, 3.0),
('1326', '113476', 'ALEENA MALIK', 3.46, 3.5, 3.4, 3.5, 3.4, 3.5),
('1327', '113467', 'UMME AMMARA', 3.47, 3.5, 3.4, 3.5, 3.5, 3.4),
('1329', '113484', 'AIMAN JALIL', 3.14, 3.1, 3.2, 3.1, 3.1, 3.2);

-- Verification Query
SELECT COUNT(*) as total_students FROM students;

-- Success Message
SELECT 'Database setup completed successfully! Total students inserted.' as Message;