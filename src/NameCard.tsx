import Person from "./Person"

export default function NameCard(
    { profession = "all", people, btnClickCount: btnThreeCount = 0 }: { profession?: string, people: Array<Person>, btnClickCount: number }
) {

    const filteredPeople = profession == "all" ? people : people.filter(person => person.profession == profession);
    const peopleJSX = filteredPeople.map(person =>
        <div key={person.id}>
            {btnThreeCount < 5 && `Showing ${person.profession}: `}
            {btnThreeCount < 5 ? person.name : "Stop Clicking..."}
        </div>
    )

    return peopleJSX;
}