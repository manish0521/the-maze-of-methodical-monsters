const player = {

    hitPoints: 100,
    damagePoint: 5,
    damageTaken: 0,
    level: 1,

    isAlive: true,


 fight: function (monster) {
    
        const damageTaken = enemy.calculateAttackDamage();
        this.damageTaken = Math.max(damageTaken - this.level, 1);
        this.hitPoints = this.hitPoints - this.damageTaken;
        
        if (this.hitPoints <= 0) {
            this.isAlive = false;
        }


        const attackDamage = this.calculateAttackDamage();


        monster.takeDamage(attackDamage);

},

calculateAttackDamage : function () {
            return Math.floor(Math.random() * this.attackDamage);
        }
    
 
},



    
