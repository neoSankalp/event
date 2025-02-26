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
      title: "Meditation & Mindfulness Retreat",
      date: "March 15, 2024",
      time: "6:00 AM - 5:00 PM",
      location: "Tranquil Ashram",
      description:
        "Immerse yourself in a day of guided meditation, breathwork, and mindfulness practices to bring inner peace and clarity.",
      img: "https://workscounselingcenter.com/wp-content/uploads/2023/07/Meditation-Strength-Training-for-the-Mind.jpg",
    },
    {
      title: "Divine Chanting & Kirtan Night",
      date: "March 20, 2024",
      time: "7:00 PM",
      location: "Sacred Temple Hall",
      description:
        "Experience the power of devotional chanting and soulful kirtan as we connect through sacred sounds and vibrations.",
      img: "https://asmy.org.au/app/uploads/2022/04/Sydney-Sunday-Night-Livestream.jpg",
    },
    {
      title: "Spiritual Awakening Satsang",
      date: "March 25, 2024",
      time: "10:00 AM",
      location: "Lotus Spiritual Center",
      description:
        "Join renowned spiritual leaders for an enlightening session on self-discovery, wisdom, and the journey to inner fulfillment.",
      img: "https://satsang-foundation.org/wp-content/uploads/2018/10/The-Satsang-Foundation-by-Sri-M-1180x600-1180x600.jpg",
    },
  ];

  return (
    <section className="bg-muted/50 py-16" id="events">
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
                    <Button className="hover:bg-lime-500 hover:text-black" size="lg">
                      Get Pass
                    </Button>
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
