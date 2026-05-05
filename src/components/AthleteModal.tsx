import Modal from './Modal'

export interface Athlete {
  id: string
  name: string
  achievement: string
  thumbnail: string
  videoUrl: string
  bio: string
}

interface Props {
  athlete: Athlete | null
  onClose: () => void
}

export default function AthleteModal({ athlete, onClose }: Props) {
  if (!athlete) return null

  return (
    <Modal open={!!athlete} onClose={onClose} size="lg">
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={athlete.thumbnail}
            alt={athlete.name}
            className="w-16 h-16 object-cover shrink-0"
          />
          <div>
            <h2 className="text-2xl font-black tracking-tighter uppercase text-white leading-none">
              {athlete.name}
            </h2>
            <p className="text-lcm-orange text-xs font-bold tracking-wider mt-1">{athlete.achievement}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-lcm-gray text-sm leading-relaxed mb-6">{athlete.bio}</p>

        {/* Video */}
        <div className="mb-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-6 bg-lcm-orange" />
            <span className="text-lcm-orange text-xs font-bold tracking-[0.3em] uppercase">Depoimento</span>
          </div>
          <div className="relative aspect-video bg-black">
            <iframe
              src={athlete.videoUrl}
              title={`Depoimento — ${athlete.name}`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Modal>
  )
}
