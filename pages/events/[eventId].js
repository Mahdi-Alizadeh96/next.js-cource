import { getAllEvents, getEventById } from '../../helpers/api-utils';

import ErrorAlert from '../../components/ui/error-alert';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import { Fragment } from 'react';

function EventDetailPage({selectedEvent ,id}) {

  console.log(id);

  const event = selectedEvent;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export async function getStaticProps(context) {

  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props : {
      selectedEvent : event,
      id : eventId
    }
  }
};

export async function getStaticPaths() {

  const allEvents = await getAllEvents();

  const paths = allEvents.map((item) => ({params : { eventId : item.id }}))

  return {
    paths : paths,
    fallback : false
  }
}

export default EventDetailPage;
