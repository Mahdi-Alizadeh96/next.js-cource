export async function getAllEvents() {

    const response = await   fetch('https://next-cource-default-rtdb.firebaseio.com/events.json')
                            .then((data) => data.json())

    const events = Object.values(response);

    return events;
}

export async function getFeaturedEvents() {

    const data = await getAllEvents();

    return data.filter((event) => event.isFeatured);
}

export async function getEventById(id) {

    const data = await getAllEvents();

    return data.find((event) => event.id === id);
  }