import { decksMock } from "@/mock/decksMock";

const DeckRow = ({ deck: { name, count, lastVisited } }: { deck: any }) => {
  return (
    <tr className="decks__deck-row">
      <td>{name}</td>
      <td>{count}</td>
      <td>{lastVisited}</td>
      <td>
        <button>+</button>
      </td>
      <td>
        <button>learn</button>
      </td>
      <td>
        <button>⚙</button>
      </td>
    </tr>
  );
};

const Decks = () => {
  const decks = decksMock;
  return (
    <div className="decks">
      <input
        className="decks__search"
        type="text"
        placeholder="Search decks..."
      ></input>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
            <th>Last Visited</th>
          </tr>
        </thead>
        <tbody>
          {decks.map((deck) => (
            <DeckRow deck={deck} />
          ))}
        </tbody>
      </table>
      <button>New Deck +</button>
    </div>
  );
};

export default Decks;
