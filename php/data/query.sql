
SELECT *, st_asgeojson(geom) AS geojson FROM barrios

alter table terrenos alter column geom type geometry(multipolygon, 4326) using st_transform (geom, 4326);

SELECT Find_SRID('public', 'comuna22', 'geom');