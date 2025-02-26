import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  const events = [
    {
      title: "Cultural Night 2024",
      date: "March 15, 2024",
      time: "7:00 PM",
      location: "Grand Auditorium",
    },
    {
      title: "Dance Festival",
      date: "March 20, 2024",
      time: "6:30 PM",
      location: "City Park",
    },
    {
      title: "Music Concert",
      date: "March 25, 2024",
      time: "8:00 PM",
      location: "Symphony Hall",
    },
  ];

  return (
    <section className="container mx-auto py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative h-[600px] overflow-hidden rounded-xl">
          <img
            src="https://placehold.co/600"
            alt="Cultural Events"
            className="object-cover"
            fill
            priority
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Upcoming Cultural Events</h1>
          <p className="text-lg text-muted-foreground">
            Experience the richness of culture through our carefully curated
            events
          </p>
          <div className="mt-4 space-y-4">
            {events.map((event, index) => (
              <Card key={index}>
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {event.date} | {event.time}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {event.location}
                    </p>
                  </div>
                  <Button>Get Pass</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
