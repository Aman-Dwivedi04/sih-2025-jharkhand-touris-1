interface ReviewCardProps {
	author: string
	rating: number
	content: string
	date: string
	avatar: string
}

export const ReviewCard = ({
							   author,
							   rating,
							   content,
							   date,
							   avatar
						   }: ReviewCardProps) => {
	return (
		<div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-sm border border-gray-200">

			{/* Header */}
			<div className="flex items-center gap-4">
				{/* Avatar */}
				<img
					src={avatar}
					alt={author}
					className="h-12 w-12 rounded-full object-cover"
				/>

				<div className="flex-1">
					<h4 className="text-sm font-semibold text-gray-900">
						{author}
					</h4>
					<p className="text-xs text-gray-500">
						{date}
					</p>
				</div>
			</div>

			{/* Rating */}
			<div className="mt-3 flex items-center gap-1">
				{Array.from({ length: 5 }).map((_, index) => (
					<span
						key={index}
						className={`text-sm ${
							index < rating ? 'text-yellow-400' : 'text-gray-300'
						}`}
					>
            ★
          </span>
				))}
				<span className="ml-2 text-xs text-gray-600">
          {rating}/5
        </span>
			</div>

			{/* Review Content */}
			<p className="mt-3 text-sm text-gray-700 leading-relaxed">
				{content}
			</p>
		</div>
	)
}
