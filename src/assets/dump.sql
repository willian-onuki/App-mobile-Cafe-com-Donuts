CREATE TABLE IF NOT EXISTS tabelaproduto(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT, 
    preco NUMBER,
    qntd NUMBER
);

INSERT OR IGNORE INTO tabelaProduto (id, nome, preco, qntd) VALUES (1, "Produto1", 1.23, 5);
INSERT OR IGNORE INTO tabelaProduto (id, nome, preco, qntd) VALUES (2, "Produto2", 1.23, 5);
INSERT OR IGNORE INTO tabelaProduto (id, nome, preco, qntd) VALUES (3, "Produto3", 1.23, 5);
INSERT OR IGNORE INTO tabelaProduto (id, nome, preco, qntd) VALUES (4, "Produto4", 1.23, 5);
INSERT OR IGNORE INTO tabelaProduto (id, nome, preco, qntd) VALUES (5, "Produto5", 1.23, 5);
INSERT OR IGNORE INTO tabelaProduto (id, nome, preco, qntd) VALUES (6, "Produto6", 1.23, 5);
INSERT OR IGNORE INTO tabelaProduto (id, nome, preco, qntd) VALUES (7, "Produto7", 1.23, 5);
INSERT OR IGNORE INTO tabelaProduto (id, nome, preco, qntd) VALUES (8, "Produto8", 1.23, 5);

