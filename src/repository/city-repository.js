const { where } = require('sequelize');
const {City} = require('../models/index')

class CityRepository{
    async createCity({ name }){
        try {
        const city = await City.create({ name })
          return city;   
        } catch (error) {
            throw {error}  
        }
    }

    async deleteCity( cityId ){
        try {
            await City.destroy({
               where: {
                  id: cityId
               }
            })
            return true;
                  
        } catch (error) {
            throw {error}
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId)
            return city
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
               
        }

    }

    async updateCity(cityId, data){
        try {
            const city = await City.update(data, {
                where:{
                    city:cityId
                }
            })
            return city;
            
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }

    }
}

module.exports = CityRepository