/* Lorewells — Tweaks panel (mounts into #tweaks-root) */
const LW_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "grain": 0.05,
  "keyIntensity": 1,
  "keyX": 38,
  "goldHeadline": false,
  "letterbox": true
}/*EDITMODE-END*/;

function LorewellsTweaks() {
  const [t, setTweak] = useTweaks(LW_TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--grain-opacity', String(t.grain));
    root.style.setProperty('--key-intensity', String(t.keyIntensity));
    root.style.setProperty('--key-pool-x', t.keyX + '%');
    document.body.dataset.goldHeadline = t.goldHeadline ? 'on' : 'off';
    document.body.dataset.letterbox = t.letterbox ? 'on' : 'off';
  }, [t]);

  return (
    <TweaksPanel>
      <TweakSection label="The lit room" />
      <TweakSlider label="Film grain" value={t.grain} min={0} max={0.14} step={0.005}
                   onChange={(v) => setTweak('grain', v)} />
      <TweakSlider label="Key-light intensity" value={t.keyIntensity} min={0.3} max={1.8} step={0.05}
                   onChange={(v) => setTweak('keyIntensity', v)} />
      <TweakSlider label="Key-light position" value={t.keyX} min={15} max={75} step={1} unit="%"
                   onChange={(v) => setTweak('keyX', v)} />
      <TweakSection label="Treatment" />
      <TweakToggle label="Gold headline (emotional peak)" value={t.goldHeadline}
                   onChange={(v) => setTweak('goldHeadline', v)} />
      <TweakToggle label="Letterbox bars" value={t.letterbox}
                   onChange={(v) => setTweak('letterbox', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<LorewellsTweaks />);
