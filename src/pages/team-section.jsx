import { Card, CardHeader } from "@/components/ui/card";

export default function TeamSection() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Event Director",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Michael Chen",
      role: "Cultural Coordinator",
      img: "https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8=",
    },
    {
      name: "Emily Rodriguez",
      role: "Production Manager",
      img: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
    },
    {
      name: "David Kim",
      role: "Marketing Head",
      img: "https://media.istockphoto.com/id/1987655119/photo/smiling-young-businesswoman-standing-in-the-corridor-of-an-office.jpg?s=612x612&w=0&k=20&c=5N_IVGYsXoyj-H9vEiZUCLqbmmineaemQsKt2NTXGms=",
    },
  ];

  return (
    <section className="py-16" id="team">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-[300px]">
                <img
                  src={member.img || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-top w-full h-full"
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
