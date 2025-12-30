// src/components/CommunityCard.jsx
import Button from './Button'; // Reuse your universal button!

const CommunityCard = ({ post }) => {
  return (
    <div className="bg-surface-card border border-surface-border rounded-2xl p-6 shadow-soft hover:border-brand-primary/30 transition-all group">
      {/* Header: Author Info */}
      <div className="flex items-center gap-4 mb-4">
        <img src={post.author.avatar} alt="" className="w-12 h-12 rounded-full bg-slate-100" />
        <div>
          <h3 className="font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
            {post.author.name}
          </h3>
          <p className="text-xs text-brand-muted">{post.author.role} • {post.timestamp}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-brand-dark/80 leading-relaxed mb-6">
        {post.content}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-brand-primary/5 text-brand-primary text-xs font-semibold rounded-full">
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer: Stats & Action */}
      <div className="flex items-center justify-between pt-4 border-t border-surface-border">
        <div className="flex gap-4 text-sm font-medium text-brand-muted">
          <span>❤️ {post.stats.likes}</span>
          <span>💬 {post.stats.comments}</span>
        </div>
        <Button variant="ghost" size="sm" className="px-3">View Post</Button>
      </div>
    </div>
  );
};

export default CommunityCard;