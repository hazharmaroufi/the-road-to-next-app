import { initialTickets } from "@/data";

type ticketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};
const TicketPage = async ({ params }: ticketPageProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return <h2 className="text-xl">Ticket not found</h2>;
  }

  return (
    <div>
      <h2 className="text-xl">Ticket title : {ticket.title}</h2>
      <h2 className="text-xl">Ticket description : {ticket?.description}</h2>
    </div>
  );
};
export default TicketPage;
