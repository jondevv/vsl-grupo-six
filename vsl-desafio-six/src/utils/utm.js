const UTM_PARAMS = [
    'utm_source',  
    'utm_medium',    
    'utm_campaign',  
    'utm_term',      
    'utm_content',  
  ];
  
  export function getUTMsFromURL() {
    //Pega tudo depois do "?" na url.
    const searchParams = new URLSearchParams(window.location.search);
  
    
    const utms = {};
  
   //percorre por cada parametro do array UTM_PARAMS
    UTM_PARAMS.forEach((param) => {
    //pega o valor do parametro da url
      const value = searchParams.get(param);
  
    //se o valor existe, adiciona ao objeto utms
      if (value) {
        utms[param] = value;
      }
    });
  
    //retorna o objeto utms com os utms encontrados
    return utms;
  }

  export function saveUTMs(utms) {
    //verifica se utms tem algum valor
    if (Object.keys(utms).length > 0) {
    //salva o utms no sessionStorage
      sessionStorage.setItem('utms', JSON.stringify(utms));
    }
  }

  export function getSavedUTMs() {
    //tenta pegar o utms salvo
    const saved = sessionStorage.getItem('utms');
  
    // Se tem algo salvo, converte de volta para objeto com json.parse
    // Se não tem,retorna objeto vazio
    return saved ? JSON.parse(saved) : {};
  }

  export function buildUTMQueryString(utms) {
    //padronizando tudo para query string
    const params = new URLSearchParams(utms);
  
    //convertendo para query string
    const queryString = params.toString();
  
    //montando a query string final
    //se tem conteúdo, coloca o "?" na frente
    //se o objeto era vazio, retorna string vazia
    return queryString ? `?${queryString}` : '';
  }

  export function initUTMs() {
    // Passo 1: tenta pegar da URL atual
    const urlUTMs = getUTMsFromURL();
  
    // Passo 2: se a URL tem UTMs, salva e retorna eles
    if (Object.keys(urlUTMs).length > 0) {
      saveUTMs(urlUTMs);
      return urlUTMs;
    }
  
    // Passo 3: se a URL não tem UTMs, retorna os que já estão salvos
    return getSavedUTMs();
  }
  