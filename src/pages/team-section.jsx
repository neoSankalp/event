import { Card, CardHeader } from "@/components/ui/card";

export default function TeamSection() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Event Director",
      img: "https://placehold.co/400",
    },
    {
      name: "Michael Chen",
      role: "Cultural Coordinator",
      img: "https://placehold.co/400",
    },
    {
      name: "Emily Rodriguez",
      role: "Production Manager",
      img: "https://placehold.co/400",
    },
    {
      name: "David Kim",
      role: "Marketing Head",
      img: "https://placehold.co/400",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative aspect-square">
                <img
                  src={member.img || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
