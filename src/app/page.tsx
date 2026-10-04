import { Hero } from '@/components/hero/hero';
import { About } from '@/components/about/about';
import {
  SelectedSystems,
  ResearchProjects,
  ClientProject,
  SideProjects,
} from '@/components/projects/selected-systems';
import { SystemLayers } from '@/components/systems/layers';
import { AIWorkflow } from '@/components/ai/ai-workflow';
import { Stack } from '@/components/systems/stack';
import { Impact } from '@/components/impact/impact';
import { Contact } from '@/components/contact/contact';
import { SignalBanner } from '@/components/ui/signal-banner';
import { BuildLoader } from '@/components/layout/experience';
export default function Home() {
  return (
    <>
      <BuildLoader />
      <main id="main">
        <Hero />
        <SignalBanner />
        <About />
        <SelectedSystems />
        <ResearchProjects />
        <SystemLayers />
        <ClientProject />
        <SignalBanner alternate />
        <AIWorkflow />
        <Stack />
        <Impact />
        <SideProjects />
        <Contact />
      </main>
    </>
  );
}
