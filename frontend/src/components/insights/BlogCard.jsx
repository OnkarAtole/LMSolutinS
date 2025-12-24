export default function BlogCard({ blog, dark }) {
  return (
    <div className={`h-full flex flex-col rounded-xl p-6 
      ${dark ? "bg-[#0F172A]" : "bg-white"}`}
    >
      {/* Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-lg mb-4 h-44 w-full object-cover"
      />

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">
          {blog.title}
        </h3>

        <p className="text-slate-400 text-sm mb-4">
          {blog.description}
        </p>
      </div>

      {/* Footer (always bottom) */}
      <div className="mt-auto flex items-center justify-between text-sm text-slate-500">
        <span>{blog.category}</span>
        <span>{blog.date}</span>
      </div>
    </div>
  );
}
