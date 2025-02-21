const Web3 = require('web3')
const fs = require('fs')
const path = require('path')
var web3 = new Web3()


function getAccount(filePath) {
    return new Promise(resolve => {
        if(fs.existsSync(filePath)){
            fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
                resolve(web3.eth.accounts.privateKeyToAccount(data))
            })
        } else {
            let randomAccount = web3.eth.accounts.create()
        
            fs.writeFile(filePath, randomAccount.privateKey, (err) => {
                if(err) {
                    return console.log(err);
                }
            })

            resolve(randomAccount)
        }
    })

}

module.exports = {
    getAccount
}
