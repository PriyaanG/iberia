import Airtable from "airtable"
import {useEffect} from "react"

var base = new Airtable({apiKey: import.meta.env.VITE_AIRTABLE_API_KEY}).base('appNSl3HLBUj7Oeug');

export default base;