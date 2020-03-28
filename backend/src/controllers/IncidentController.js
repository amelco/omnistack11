const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        // paginação
        const {page = 1} = request.query;

        // número total de casos
        // retorna para o HEADER da resposta
        const [count] = await connection('incidents').count();
        response.header('X-Total-count', count['count(*)']);

        console.log(count);

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)    
            .select([
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf'
            ]);

        return response.json(incidents);

    },

    async create (request, response) {
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json({id});
    },

    async delete (request, response) {
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        
        if (incident.ong_id !== ong_id) {
            return response.status(401).json({error: "Operation not permitted." });
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};