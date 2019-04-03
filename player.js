const player = {

    hitPoints: 100,
    damagePoint: 5,
    lastDamageTaken: 0,
    level: 1,
    attackDamage: 0,
    isAlive: true,


 fight: function (enemy) {
    
        const lastDamageTaken = enemy.calculateAttackDamage();
        this.lastDamageTaken = Math.max(lastDamageTaken - this.level, 1);
        this.hitPoints = this.hitPoints - this.lastDamageTaken;
        
        if (this.hitPoints <= 0) {
            this.isAlive = false;
        }


        const attackDamage = this.calculateAttackDamage();


        monster.takeDamage(attackDamage);

},

calculateAttackDamage : function () {
            return Math.floor(Math.random() * this.attackDamage);
        }
    
 
}