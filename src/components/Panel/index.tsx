import React, {KeyboardEventHandler, useEffect} from 'react';
import {PanelContainer} from "@/components/Panel/styles";
import useSWR from "swr";
import Video from "../Video";
import Button from "@/components/Button";

interface ResponseResult {
  url: string,
  isLiked: boolean
}

const Panel = () => {
  const { data, isLoading, mutate } = useSWR<ResponseResult>('https://dogs-api.nomadcoders.workers.dev')
  console.log(data)

  const handleNextImage = () => {
    mutate();
  }

  const handleToggleLiked = () => {
    mutate((prev) => prev && { ...prev, isLiked: !prev.isLiked }, false);
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log(e.key)
      if (e.key === 'n' || e.key === 'ㅜ') {
        mutate();
      } else if (e.key === 'l' || e.key === 'ㅣ') {
        mutate((prev) => prev && { ...prev, isLiked: !prev.isLiked }, false);
      }
    }

    globalThis.addEventListener('keydown', handler)

    return () => {
      globalThis.removeEventListener('keydown', handler)
    }
  }, [mutate])


  return (
    <PanelContainer>
      <Video url={data?.url} key={data?.url} />
      <div className="button-area">
        <Button theme='white' onClick={handleNextImage}>New Dog! (N Key)</Button>
        {data?.isLiked
          ? <Button theme={'red'} onClick={handleToggleLiked}>UnLike (L Key)</Button>
          : <Button onClick={handleToggleLiked}>Like (L Key)</Button>
        }
      </div>
    </PanelContainer>
  );
};

export default Panel;