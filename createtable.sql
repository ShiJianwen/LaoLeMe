CREATE TABLE user (
	id VARCHAR(6) PRIMARY KEY NOT NULL,
	username VARCHAR(18),
	password VARCHAR(64),
	realname VARCHAR(10),
	sex VARCHAR(1),
	phone VARCHAR(12),
	addr VARCHAR(30)
);

CREATE TABLE boss (
	id VARCHAR(6) PRIMARY KEY NOT NULL,
	username VARCHAR(18),
	password VARCHAR(64),
	realname VARCHAR(10),
	sex VARCHAR(1),
	phone VARCHAR(12),
	addr VARCHAR(30),
	idcard VARCHAR(18)
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
	lat VARCHAR(10),
	lng VARCHAR(10),
	service_radius VARCHAR(10),
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
	sale_num INT DEFAULT 0,
	enable VARCHAR(1),
	FOREIGN KEY (restaurant) REFERENCES restaurant(id)
);

CREATE TABLE comment (
	id VARCHAR(6) PRIMARY KEY NOT NULL,
	restaurant VARCHAR(6) NOT NULL,
	food VARCHAR(6) NOT NULL,
	uid VARCHAR(6) NOT NULL,
	create_date DATE,
	content VARCHAR(140),
	star_num VARCHAR(1),
	reply VARCHAR(140),
	FOREIGN KEY (uid) REFERENCES user(id)
);

CREATE TABLE orders (
	id VARCHAR(6) PRIMARY KEY NOT NULL,
	user VARCHAR(6) NOT NULL,
	restaurant VARCHAR(6) NOT NULL,
	food VARCHAR(6) NOT NULL,
	addr VARCHAR(30),
	phone VARCHAR(12),
	price VARCHAR(6),
	create_date DATE,
	note VARCHAR(20),
	status VARCHAR(1),
	FOREIGN KEY (user) REFERENCES user(id),
	FOREIGN KEY (restaurant) REFERENCES restaurant(id),
	FOREIGN KEY (food) REFERENCES food(id)
);

CREATE TABLE feedback (
	id VARCHAR(6) PRIMARY KEY NOT NULL,
	user VARCHAR(6),
	create_date DATE,
	content VARCHAR(140),
	contact VARCHAR(12),
	FOREIGN KEY (user) REFERENCES user(id)
);

CREATE TABLE message (
	id VARCHAR(6) PRIMARY KEY NOT NULL,
	receiver VARCHAR(6),
	sender VARCHAR(6),
	create_date DATE,
	content VARCHAR(100),
	is_read VARCHAR(1) DEFAULT 0
);