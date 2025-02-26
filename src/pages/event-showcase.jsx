import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function EventShowcase() {
  const events = [
    {
      title: "Cultural Night 2024",
      date: "March 15, 2024",
      time: "7:00 PM",
      location: "Grand Auditorium",
      description:
        "Join us for an evening of diverse cultural performances, traditional music, and dance showcasing the rich heritage of various communities.",
      img: "https://placehold.co/500x400",
    },
    {
      title: "Dance Festival",
      date: "March 20, 2024",
      time: "6:30 PM",
      location: "City Park",
      description:
        "Experience the magic of dance forms from around the world, featuring both classical and contemporary performances.",
      img: "https://placehold.co/500x400",
    },
    {
      title: "Music Concert",
      date: "March 25, 2024",
      time: "8:00 PM",
      location: "Symphony Hall",
      description:
        "A mesmerizing evening of classical and fusion music performed by renowned artists from across the globe.",
      img: "https://placehold.co/500x400",
    },
  ];

  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold">Event Showcase</h2>
        <div className="space-y-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={event.img || "/placeholder.svg"}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>
                      {event.date} | {event.time} | {event.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">
                      {event.description}
                    </p>
                    <Button size="lg">Get Pass</Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
