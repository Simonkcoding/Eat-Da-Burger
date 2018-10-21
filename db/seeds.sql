INSERT INTO burgers (burger_name) VALUES ('Simons belly meat special');
INSERT INTO burgers (burger_name) VALUES ('Deep Web Baby Burger');
INSERT INTO burgers (burger_name) VALUES ('Heart Attack Sandwiches');

update burgers set devoured = 0 where burger_name = 'Heart Attack Sandwiches';
update burgers set devoured = 0 where burger_name = 'Poop Sandwiches';