import { FC, MouseEvent } from 'react';
import { PanelRightOpen } from 'lucide-react';

interface SourceComponentProps {
  sourceNum: number;
  sourceName: string;
  sourceText: string;
  sourceLink: string;
  onClickSource: (sourcePreview: string) => void;
  sourcePreview: string;
  previewLoaded: boolean;
  hasPreview: boolean;
  sourcePage: number;
}

const SourceComponent: FC<SourceComponentProps> = ({
  sourceNum,
  sourceName,
  sourceText,
  sourceLink,
  onClickSource,
  sourcePreview,
  previewLoaded,
  hasPreview,
  sourcePage
}) => {
  const handleModalClick = (e: MouseEvent) => {
    if(previewLoaded) {
      onClickSource(sourcePreview);
    } else {
      e.stopPropagation();
      alert("Preview not loaded yet");
    }
  };

  return (
    <div className="relative flex justify-between items-center bg-white border-blue border-4 rounded-lg m-2 p-2 text-black font-serif text-lg p-1">
      <div className="ml-2 w-4/5">
        <h3 className="text-left text-l font-semibold mb-1 pt-1">
          {`Source ${sourceNum + 1}: ${sourceName && sourceName.split('.')[0].replace(/[_+]/g, ' ')}`}
        </h3>
        <h3 className="absolute top-0 right-0 mt-2 mr-2 text-sm font-semibold">
      {`Page: ${sourcePage}`}
    </h3>
        <p className="text-left text-sm">
          Preview: {`${sourceText && sourceText.slice(0, 75)}${sourceText && sourceText.length > 75 ? '...' : ''}`}
        </p>
      </div>
      <PanelRightOpen
        size={40}
        color={previewLoaded ? 'green' : 'black'}
        className={`mr-1 mt-8 `}
        onClick={handleModalClick}
      />
    </div>
  );
};

export default SourceComponent;