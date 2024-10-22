interface BackgroundOverlayProps {
  children: React.ReactNode;
}

export const BackgroundOverlay: React.FC<BackgroundOverlayProps> = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <div className="absolute inset-0 bg-gradient-to-tl from-black to-zinc-800 opacity-85"></div>
    </div>
  );
};
