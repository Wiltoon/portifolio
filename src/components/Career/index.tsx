import { useState } from 'preact/hooks';
import { JobModal } from '../JobModal';
import { ScrollTimeline } from '../ScrollTimeline';
import { Experience } from '../../content/career';
import { CareerContainer } from './styles';

interface CareerProps {
    onNavigate?: (page: string) => void;
    /** Experience id to scroll to when the page opens (picked in the guide). */
    focusId?: string | null;
}

/** Experiences page body: a single scroll-driven timeline + details modal. */
export function Career({ onNavigate, focusId }: CareerProps) {
    const [selected, setSelected] = useState<Experience | null>(null);

    return (
        <>
            <CareerContainer id="career">
                <ScrollTimeline onSelect={setSelected} onNavigate={onNavigate} focusId={focusId} />
            </CareerContainer>

            {selected && (
                <JobModal isOpen onClose={() => setSelected(null)} job={selected} />
            )}
        </>
    );
}
