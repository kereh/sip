-- SQLite database schema

-- Create tables
CREATE TABLE "Buku" (
    id TEXT PRIMARY KEY NOT NULL,
    nomor TEXT,
    nama TEXT NOT NULL,
    idRak TEXT NOT NULL,
    dipinjam BOOLEAN DEFAULT 0 NOT NULL
);

CREATE TABLE "Peminjaman" (
    id TEXT PRIMARY KEY NOT NULL,
    waktu TEXT NOT NULL,
    idBuku TEXT NOT NULL,
    idUser TEXT NOT NULL,
    status BOOLEAN DEFAULT 0 NOT NULL
);

CREATE TABLE "Rak" (
    id TEXT PRIMARY KEY NOT NULL,
    nama TEXT NOT NULL
);

-- Insert data into tables
INSERT INTO "Buku" (id, nomor, nama, idRak, dipinjam) VALUES 
    ('clupfq1rv0002ayh016tgg3u4', 'KD 1', 'Kamus Saku Keperawatan', 'clupfplnk0000ayh0v9m69l75', 0),
    ('clupfqd8r0003ayh027r1uwrm', 'KD 2.1', 'Kamus Keperawatan', 'clupfplnk0000ayh0v9m69l75', 0),
    ('cluwafhvj0000fernygcvo78j', 'KD 2.1', 'Kamus Keperawatan', 'clupfplnk0000ayh0v9m69l75', 0),
    ('cluwafhvj0001fern5fc3unw4', 'KD 3', 'Kamus Keperawatan Edisi 17', 'clupfplnk0000ayh0v9m69l75', 0),
    ('cluwafhvj0002fernb96lc340', 'KD 4.1', 'Kamus Istilah Keperawatan', 'clupfplnk0000ayh0v9m69l75', 0),
    ('cluwafhvj0003ferncsq1hp2y', 'KD 4.2', 'Kamus Perawat', 'clupfplnk0000ayh0v9m69l75', 0),
    ('cluwahai10004fernbqk4ljxp', 'KD 4.3', 'Kamus Perawat', 'clupfplnk0000ayh0v9m69l75', 0),
    ('cluwahai10005fernghh3dwwr', 'KD 4.4', 'Kamus Perawat', 'clupfplnk0000ayh0v9m69l75', 0),
    ('cluwahai10006fernxh92k0yc', 'KD 4.5', 'Kamus Perawat', 'clupfplnk0000ayh0v9m69l75', 0),
    ('cluwaigr00007fernnfz3ueci', 'KD 4.6', 'Kamus Perawat', 'clupfplnk0000ayh0v9m69l75', 0),
    ('cluwaigr10008ferngn7uc2kw', 'KD 4.7', 'Kamus Perawat', 'clupfplnk0000ayh0v9m69l75', 0),
    ('cluwakrc50009ferntyw160p5', 'KD 4.8', 'Kamus Perawat', 'clupfplnk0000ayh0v9m69l75', 0),
    ('cluwakrc6000afernxfyxk55p', 'KD 4.9', 'Kamus Perawat', 'clupfplnk0000ayh0v9m69l75', 0),
    ('cluwakrc7000bferng1jmxzb5', 'KD 5', 'Kamus Perawat', 'clupfplnk0000ayh0v9m69l75', 0),
    ('cluwakrc7000cfern79jow3z5', 'KD 5.1', 'Kamus Perawat', 'clupfplnk0000ayh0v9m69l75', 0);

INSERT INTO "Rak" (id, nama) VALUES 
    ('clupfplnk0000ayh0v9m69l75', 'KD'),
    ('clupfplnk0001ayh013vlzk7j', 'KMB');