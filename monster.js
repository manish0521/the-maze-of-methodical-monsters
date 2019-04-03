const monster = {

    hitPoints: 30,
    damagePoint: 5,
    lastDamageTaken: 0,
    attackDamage: 5,
    level: 1,
    
    isAlive: true,

respawn: function() {
    this.hitPoints = 30;
    this.isAlive = true;
},


calculateAttackDamage: function() {
    return Math.floor(Math.random() * this.attackDamage) + 5;
},


takeDamage: function(damage) {
    this.lastDamageTaken = Math.max(damage - this.level, 1);
    this.hitPoints = this.hitPoints- this.lastDamageTaken;
    if (this.hitPoints <= 0) {
        this.isAlive = false;
    }
}
};
