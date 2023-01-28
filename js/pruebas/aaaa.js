var query = "SELECT * FROM terrenos";

client.query(query, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        var geojson = result.rows.map(function(row) {
            return {
                "type": "Feature",
                "geometry": JSON.parse(row.geom),
                "properties": {
                    "name": row.name
                }
            }
        });
        L.geoJSON(geojson).addTo(map);
    }
    client.end();
});