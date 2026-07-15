function SearchBar({    
    search,
    setSearch,
    gender,
    setGender }) {
  return (
    <section>
      <input
        type="text"
        placeholder="Search Employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
    value={gender}
    onChange={(e) => setGender(e.target.value)}
>

    <option value="all">All</option>

    <option value="male">Male</option>

    <option value="female">Female</option>

</select>

      <select>
        <option>Default</option>
        <option>Name</option>
        <option>Age ↑</option>
        <option>Age ↓</option>
      </select>
    </section>
  );
}

export default SearchBar;