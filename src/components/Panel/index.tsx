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
    const handler: KeyboardEventHandler<Window> = (e) => {
      console.log(e.key)
      if (e.key === 'n') {
        mutate();
      } else if (e.key === 'l') {
        mutate((prev) => prev && { ...prev, isLiked: !prev.isLiked }, false);
      }
    }

    // @ts-ignore
    globalThis.addEventListener('keydown', handler)

    return () => {
      // @ts-ignore
      globalThis.removeEventListener('keydown', handler)
    }
  }, [])


  return (
    <PanelContainer>
      <Video url={data?.url} key={data?.url} />
      <div className="button-area">
        <Button theme='white' onClick={handleNextImage}>New Dog! (Cmd + n)</Button>
        {data?.isLiked
          ? <Button theme={'red'} onClick={handleToggleLiked}>UnLike (Cmd + l)</Button>
          : <Button onClick={handleToggleLiked}>Like (Cmd + l)</Button>
        }
      </div>
    </PanelContainer>
  );
};

export default Panel;