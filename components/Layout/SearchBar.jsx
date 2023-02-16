import React, {useEffect, useState}from 'react'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [pokemon, setPokemon] = useState([])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      const data = await response.json()
      setPokemon(data)
    }
    fetchPokemon()
  }, [search])

  return (
    <div>
      <input type="text" value={search} onChange={handleChange} />
      <div>
        {pokemon.name && <p>{pokemon.name}</p>}
      </div>
    </div>
  )
}

export default SearchBar;