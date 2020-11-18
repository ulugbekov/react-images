// @flow

export function getSource({ data, isFullscreen }) {
  let { source = data.src } = data;
  if (typeof source === 'string') return source;

  return isFullscreen ? source.fullscreen : source.regular;
}

export function getThumbnail({ data }) {
  const { source } = data;

  if (typeof source === 'string') return source;

  return source.thumbnail;
}

export function getLoadingSource({ data, isFullscreen }) {
  const { loading } = data;

  if (typeof loading === 'string') return loading;

  return isFullscreen ? loading.fullscreen : loading.regular;
}
