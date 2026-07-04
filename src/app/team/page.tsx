import type { Metadata } from 'next';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Media } from '@/components/ui/Media';
import { CTASection } from '@/components/sections/CTASection';
import { getTeam } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Our Team',
  description: 'Meet the people behind SRK Construction — experienced, dedicated, and local.',
  path: '/team',
});

export default function TeamPage() {
  const team = getTeam();
  return (
    <>
      <Section>
        <SectionHeading
          centered
          eyebrow="The people"
          title="Meet Our Team"
          lead="Experienced professionals who take pride in every project."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full">
                <Media src={member.photo} alt={member.name} className="h-full w-full" />
              </div>
              <h3 className="mt-4 text-lg">{member.name}</h3>
              <p className="text-sm font-medium text-accent">{member.role}</p>
              {member.bio ? <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p> : null}
            </div>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
