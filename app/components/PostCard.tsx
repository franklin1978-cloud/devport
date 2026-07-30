interface PostCardProps {
    id: number
    titulo: string
    empresa: string
    tipo: 'job' | 'proyect' //solo estos dos valores
    tags: string[] //array de strings
}
export default function PostCard({
     id, titulo, empresa, tipo, tags }: PostCardProps) {
     
        return (
        <article className="bg-slate-800 rounded-xl p-5flex flex-col gap-3 hover:bg-slate-750 transition-colors">
            {/* Badge de tipo */}
            <span className='...(clase dinamica segun tipo)'>
                {tipo === 'job' ? 'Empleo' : 'Proyecto'}
            </span>
            {/* Título */}
            <h2 className="text-white font-bold text-lg leading-tight">
                {titulo}
            </h2>
            {/* Empresa */}
            <p className="text-slate-400 text-sm">{empresa}</p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span key={tag}
                        className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded-md">
                        {tag}
                    </span>
                ))}
            </div>
            {/* Botón */}
            <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors self-end">
                Ver más
            </button>
        </article>
    )
}
