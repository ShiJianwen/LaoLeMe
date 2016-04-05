CREATE TABLE user (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	phone VARCHAR(12),
	password VARCHAR(64),
	realname VARCHAR(10),
	sex VARCHAR(1),
	addr VARCHAR(30)
);

CREATE TABLE boss (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	phone VARCHAR(12),
	password VARCHAR(64),
	realname VARCHAR(10),
	sex VARCHAR(1),
	addr VARCHAR(30),
	idcard VARCHAR(18)
);


CREATE TABLE restaurant (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	name VARCHAR(20),
	boss INT,
	city VARCHAR(10),
	descrb VARCHAR(100),
	FOREIGN KEY (boss) REFERENCES boss(id)
	on delete cascade 
	on update cascade 
);


CREATE TABLE food (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	name VARCHAR(10),
	restaurant INT,
	price INT,
	sale_num INT DEFAULT 0,
	enable VARCHAR(1),
	FOREIGN KEY (restaurant) REFERENCES restaurant(id)
	ON DELETE cascade
	ON UPDATE cascade
);

CREATE TABLE comment (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	restaurant INT NOT NULL,
	food INT NOT NULL,
	uid INT NOT NULL,
	create_date DATE,
	content VARCHAR(140),
	star_num VARCHAR(1),
	reply VARCHAR(140),
	FOREIGN KEY (uid) REFERENCES user(id)
	ON delete cascade
	on update cascade,
	FOREIGN KEY (restaurant) REFERENCES restaurant(id)
	ON delete cascade
	on update cascade,
	FOREIGN KEY (food) REFERENCES food(id)
	ON delete cascade
	on update cascade
);

CREATE TABLE orders (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	user INT NOT NULL,
	restaurant INT NOT NULL,
	food VARCHAR(100) NOT NULL,
	addr VARCHAR(30),
	phone VARCHAR(12),
	price VARCHAR(6),
	create_date DATE,
	note VARCHAR(20),
	status VARCHAR(1),
	FOREIGN KEY (user) REFERENCES user(id)
	ON delete cascade
	on update cascade,
	FOREIGN KEY (restaurant) REFERENCES restaurant(id)
	ON delete cascade
	on update cascade
);

