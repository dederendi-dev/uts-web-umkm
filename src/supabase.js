import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mlycwggvkcajomydywlg.supabase.co'
const supabaseKey = 'sb_publishable_e3cM8HncajTOxk45UFRiDg_2XO-qt0K'

export const supabase = createClient(supabaseUrl, supabaseKey)