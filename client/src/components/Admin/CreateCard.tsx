import React from 'react'

const CreateCard = () => {
    return (
        <>
            <label htmlFor="name">

                <div>NAME</div>

                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                />
            </label>

            <label htmlFor="cost">

                <div>COST</div>

                <input
                    type="number"
                    id="cost"
                    name="cost"
                    placeholder="Mana Cost"
                />
            </label>
            <label htmlFor="atk">

                <div>ATK</div>

                <input
                    type="number"
                    id="atk"
                    name="atk"
                    placeholder="ATK"
                />
            </label>
            <label htmlFor="def">

                <div>DEF</div>

                <input
                    type="number"
                    id="def"
                    name="def"
                    placeholder="DEF"
                />
            </label>
            <label htmlFor="hp">

                <div>HP</div>

                <input
                    type="number"
                    id="hp"
                    name="hp"
                    placeholder="HP"
                />
            </label>

            <label htmlFor="mp">
                <div>MP</div>
                <input
                    type="number"
                    id="mp"
                    name="mp"
                    placeholder="MOVE"
                />
            </label>

            <label htmlFor="effects">
                <div>EFFECTS</div>
                <input
                    type="text"
                    id="effects"
                    name="effects"
                    placeholder="EFFECTS"
                />
            </label>
        </>
    )
}

export default CreateCard