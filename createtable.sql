CREATE TABLE user (
	id VARCHAR(6) PRIMARY KEY NOT NULL,
	username VARCHAR(18),
	password VARCHAR(18),
	realname VARCHAR(10),
	sex VARCHAR(1),
	phone VARCHAR(12),
	addr VARCHAR(30)
);

CREATE TABLE boss (
	id VARCHAR(6) PRIMARY KEY NOT NULL,
	username VARCHAR(18),
	password VARCHAR(18),
	realname VARCHAR(10),
	sex VARCHAR(1),
	phone VARCHAR(12),
	addr VARCHAR(30),
	idcard VARCHAR(18),
	restaurant VARCHAR(6),
	FOREIGN KEY (restaurant) REFERENCES restaurant(id)
);

CREATE TABLE categories (
	id VARCHAR(6) PRIMARY KEY NOT NULL,
	name VARCHAR(10)
);

CREATE TABLE restaurant (
	id VARCHAR(6) PRIMARY KEY NOT NULL,
	name VARCHAR(20),
	categories VARCHAR(6),
	boss VARCHAR(6),
	addr VARCHAR(30),
	FOREIGN KEY (categories) REFERENCES categories(id),
	FOREIGN KEY (boss) REFERENCES boss(id)
);

CREATE TABLE manager (
	id VARCHAR(6) PRIMARY KEY NOT NULL,
	username VARCHAR(18),
	password VARCHAR(18)
);

CREATE TABLE food (
	id VARCHAR(6) PRIMARY KEY NOT NULL,
	name VARCHAR(10),
	restaurant VARCHAR(6),
	price INT,
	sale_num INT,
	enable VARCHAR(1),
	FOREIGN KEY (restaurant) REFERENCES restaurant(id)
);

CREATE TABLE comment (
	restaurant VARCHAR(6) NOT NULL,
	food VARCHAR(6) NOT NULL,
	uid VARCHAR(6) NOT NULL,
	create_date DATE DEFAULT CURDATE(),
	content VARCHAR(140),
	star_num VARCHAR(1),
	reply VARCHAR(140),
	PRIMARY KEY (restaurant, food),
	FOREIGN KEY (uid) REFERENCES user(id)
);

CREATE TABLE order (
	id VARCHAR(6) PRIMARY KEY NOT NULL,
	user VARCHAR(6) NOT NULL,
	restaurant VARCHAR(6) NOT NULL,
	food VARCHAR(6) NOT NULL,
	addr VARCHAR(30),
	phone VARCHAR(12),
	price VARCHAR(6),
	create_date DATE DEFAULT CURDATE(),
	note VARCHAR(20),
	status VARCHAR(1),
	FOREIGN KEY (user) REFERENCES user(id),
	FOREIGN KEY (restaurant) REFERENCES restaurant(id),
	FOREIGN KEY (food) REFERENCES food(id)
);

CREATE TABLE feedback (
	id VARCHAR(6) PRIMARY KEY NOT NULL,
	user VARCHAR(6),
	create_date DATE DEFAULT CURDATE(),
	content VARCHAR(140),
	contact VARCHAR(12),
	FOREIGN KEY (user) REFERENCES user(id)
);

CREATE TABLE message (
	id VARCHAR(6) PRIMARY KEY NOT NULL,
	receiver VARCHAR(6),
	sender VARCHAR(6),
	create_date DATE DEFAULT CURDATE,
	content VARCHAR(100),
	is_read VARCHAR(1)
);