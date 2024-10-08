import { Warrior, Mage, Ninja, Monk } from "./Hero.js"

const attackBtn = document.querySelector('#attack-btn')

attackBtn.addEventListener('click', () => {
    const heroAttacking = document.querySelector('#hero-attacking')
    const heroEquipment = document.querySelector('#hero-equipment')
    const heroTypeSelect = document.querySelector('#hero-type')
    const selectedHeroType = heroTypeSelect.value

    const equipmentAttack = checkHeroTypeInput(selectedHeroType)
    
    heroAttacking.textContent = selectedHeroType
    heroEquipment.textContent = equipmentAttack
})

const checkHeroTypeInput = (selectedHeroType) => {
    const heroNameInput = document.querySelector('#hero-name').value
    const heroAgeInput = document.querySelector('#hero-age').value
    const heroAge = Number(heroAgeInput)

    let equipmentAttack = ""

    switch(selectedHeroType){
        case 'Guerreiro':
            const warrior = new Warrior(heroNameInput, heroAge, selectedHeroType)
            equipmentAttack = warrior.attack()
            break

        case 'Mago':
            const mage = new Mage(heroNameInput, heroAge, selectedHeroType)
            equipmentAttack = mage.attack()
            break

        case 'Ninja':
            const ninja = new Ninja(heroNameInput, heroAge, selectedHeroType)
            equipmentAttack = ninja.attack()
            break

        case 'Monge':
            const monk = new Monk(heroNameInput, heroAge, selectedHeroType)
            equipmentAttack = monk.attack()
            break

        default: equipmentAttack = "Não foi identificado o tipo de herói. Por favor, tente novamente."
    }

    return equipmentAttack
}