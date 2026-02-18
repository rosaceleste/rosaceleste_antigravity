-- Semillas para la tabla products
INSERT INTO products (name, slug, description, price, category, subcategory, image_url, is_featured)
VALUES 
('Espejo Sol Poniente', 'espejo-sol-poniente', 'Espejo redondo tejido en macramé con flecos que emulan los rayos del sol. Ideal para salas y dormitorios.', 145000, 'decoracion_pared', 'espejo', ARRAY['https://images.unsplash.com/photo-1615852923146-24c643794958?auto=format&fit=crop&q=80&w=800'], true),
('Camino de Mesa "Calma"', 'camino-mesa-calma', 'Elegante camino de mesa tejido a mano con algodón orgánico. Aporta textura y calidez a tu comedor.', 85000, 'decoracion_mesa', 'camino_mesa', ARRAY['https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800'], true),
('Tapiz Mural "Raíces"', 'tapiz-mural-raices', 'Obra de arte textil de gran formato con nudos complejos y textura orgánica.', 220000, 'decoracion_pared', 'tapiz', ARRAY['https://images.unsplash.com/photo-1522758971460-1d21eff3bbbc?auto=format&fit=crop&q=80&w=800'], true),
('Portavasos "Nudo Simple" (Set x4)', 'portavasos-nudo-simple', 'Protege tus superficies con estilo artesanal. Pack de 4 portavasos circulares.', 45000, 'decoracion_mesa', 'portavasos', ARRAY['https://images.unsplash.com/photo-1581423346202-24388837324c?auto=format&fit=crop&q=80&w=800'], false),
('Bolso "Viento de Verano"', 'bolso-viento-verano', 'Accesorio versátil y ligero para el día a día. Estilo bohemio y resistente.', 120000, 'uso_personal', 'bolso', ARRAY['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800'], false);
